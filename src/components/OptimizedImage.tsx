import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  priority = false,
  style,
  onClick
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageLoading, setImageLoading] = useState(true);

  // Convert image path to WebP with fallback
  const getWebPPath = (path: string) => {
    // If it's an external URL, return as is
    if (path.startsWith('http')) return path;
    
    // Replace extension with .webp
    return path.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/, '.webp');
  };

  // Get original path for fallback
  const getOriginalPath = (path: string) => {
    return path;
  };

  useEffect(() => {
    // Preload priority images
    if (priority) {
      const img = new Image();
      img.src = getWebPPath(src);
      img.onload = () => {
        setImageSrc(getWebPPath(src));
        setImageLoading(false);
      };
      // Fallback to original if WebP fails
      img.onerror = () => {
        const fallbackImg = new Image();
        fallbackImg.src = getOriginalPath(src);
        fallbackImg.onload = () => {
          setImageSrc(getOriginalPath(src));
          setImageLoading(false);
        };
      };
    } else {
      setImageSrc(getWebPPath(src));
    }
  }, [src, priority]);

  const handleLoad = () => {
    setImageLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback to original format if WebP fails
    const target = e.target as HTMLImageElement;
    if (target.src.endsWith('.webp')) {
      target.src = getOriginalPath(src);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Blur placeholder */}
      {imageLoading && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
      )}
      
      <picture>
        {/* WebP source for modern browsers */}
        <source srcSet={getWebPPath(src)} type="image/webp" />
        
        {/* Fallback for older browsers */}
        <img
          src={imageSrc || getOriginalPath(src)}
          alt={alt}
          loading={priority ? 'eager' : loading}
          decoding="async"
          className={`${className} ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
          onClick={onClick}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
