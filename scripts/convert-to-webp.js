import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public');

// Image extensions to convert
const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

// Quality settings
const QUALITY = 85; // 85 is a good balance between quality and size

console.log('🖼️  Starting image conversion to WebP...\n');

const files = fs.readdirSync(inputDir);

let convertedCount = 0;
let skippedCount = 0;
let errorCount = 0;

const convertImages = async () => {
  for (const file of files) {
    const ext = path.extname(file);
    const filePath = path.join(inputDir, file);
    
    // Skip if not an image or already WebP
    if (!imageExtensions.includes(ext)) {
      continue;
    }

    // Check if file is actually an image (not a directory)
    let stats;
    try {
      stats = fs.statSync(filePath);
      if (!stats.isFile()) {
        continue;
      }
    } catch (error) {
      continue;
    }

    const outputFileName = file.replace(ext, '.webp');
    const outputPath = path.join(outputDir, outputFileName);

    // Skip if WebP version already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipped: ${file} (WebP already exists)`);
      skippedCount++;
      continue;
    }

    try {
      // Get original file size
      const originalSize = stats.size;

      // Convert to WebP
      await sharp(filePath)
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      // Get new file size
      const newStats = fs.statSync(outputPath);
      const newSize = newStats.size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

      console.log(`✅ Converted: ${file} → ${outputFileName}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB | WebP: ${(newSize / 1024).toFixed(1)}KB | Saved: ${savings}%\n`);
      
      convertedCount++;
    } catch (error) {
      console.error(`❌ Error converting ${file}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n📊 Conversion Summary:');
  console.log(`   ✅ Converted: ${convertedCount} images`);
  console.log(`   ⏭️  Skipped: ${skippedCount} images`);
  console.log(`   ❌ Errors: ${errorCount} images`);
  console.log('\n💡 Next steps:');
  console.log('   1. Update image paths in your code to use .webp extension');
  console.log('   2. Keep original images as fallback for older browsers');
  console.log('   3. Test your website to ensure images load correctly\n');
};

convertImages();

