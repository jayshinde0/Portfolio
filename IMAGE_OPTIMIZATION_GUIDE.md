# Image Optimization Guide

## Implemented Optimizations

### 1. Lazy Loading
- All images use `loading="lazy"` attribute
- First image in carousel uses `loading="eager"` for immediate display
- Reduces initial page load time

### 2. Async Decoding
- `decoding="async"` allows browser to decode images off the main thread
- Prevents blocking page rendering

### 3. Code Splitting
- Vite configured to split vendor chunks
- React, animations, and icons loaded separately
- Reduces initial bundle size

### 4. Asset Inlining
- Small images (<4KB) inlined as base64
- Reduces HTTP requests

### 5. Minification
- Terser minification enabled
- Console.logs removed in production
- Smaller bundle size

## Recommended: Convert Images to WebP

### Why WebP?
- 25-35% smaller than JPEG/PNG
- Supports transparency (like PNG)
- Better compression (like JPEG)
- Supported by all modern browsers

### How to Convert

#### Option 1: Online Tools
1. Go to https://squoosh.app/
2. Upload your images
3. Select WebP format
4. Download optimized images

#### Option 2: Command Line (ImageMagick)
```bash
# Install ImageMagick
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Convert single image
magick convert input.jpg -quality 85 output.webp

# Batch convert all images in folder
for file in *.{jpg,jpeg,png}; do
  magick convert "$file" -quality 85 "${file%.*}.webp"
done
```

#### Option 3: Node.js Script
```bash
npm install sharp --save-dev
```

Create `scripts/optimize-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public';
const outputDir = './public/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    sharp(path.join(inputDir, file))
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
      .then(() => console.log(`Converted ${file}`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
```

Run: `node scripts/optimize-images.js`

### Using WebP with Fallback

Update image paths in your code:
```tsx
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="Description" loading="lazy" />
</picture>
```

## Performance Checklist

- [x] Lazy loading implemented
- [x] Async decoding enabled
- [x] Code splitting configured
- [x] Asset inlining enabled
- [x] Minification enabled
- [ ] Convert images to WebP (recommended)
- [ ] Add responsive images with srcset
- [ ] Implement image CDN (optional)

## Measuring Performance

### Lighthouse Audit
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Check "Performance" score

### Key Metrics to Monitor
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Total Bundle Size**: < 500KB (gzipped)

## Additional Optimizations

### 1. Image CDN (Optional)
Use services like:
- Cloudinary
- ImageKit
- Vercel Image Optimization

### 2. Responsive Images
```tsx
<img
  src="/image-800w.jpg"
  srcSet="
    /image-400w.jpg 400w,
    /image-800w.jpg 800w,
    /image-1200w.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Description"
  loading="lazy"
/>
```

### 3. Preload Critical Images
Add to `index.html`:
```html
<link rel="preload" as="image" href="/hero-image.jpg" />
```

## Current Implementation

### Projects Component
- ✅ Lazy loading on grid images
- ✅ Eager loading on first carousel image
- ✅ Async decoding
- ✅ Smooth transitions

### Vite Config
- ✅ Code splitting
- ✅ Asset inlining (4KB threshold)
- ✅ Terser minification
- ✅ Console removal in production

### OptimizedImage Component
- ✅ Blur placeholder effect
- ✅ Priority loading support
- ✅ Smooth fade-in transition
- ✅ Error handling

## Next Steps

1. **Convert all images to WebP** (biggest impact)
2. **Compress existing images** (use Squoosh or TinyPNG)
3. **Add responsive images** for different screen sizes
4. **Consider image CDN** for production deployment

## Resources

- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Squoosh App](https://squoosh.app/)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP Browser Support](https://caniuse.com/webp)
