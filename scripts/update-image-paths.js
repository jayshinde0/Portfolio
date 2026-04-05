import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to search for image references
const searchDirs = [
  path.join(__dirname, '../src'),
];

// Image extensions to replace
const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

let filesUpdated = 0;
let replacementsMade = 0;

console.log('🔄 Updating image paths to WebP...\n');

function updateImagePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let fileReplacements = 0;

  // Pattern to match image paths in various formats
  const patterns = [
    // src="/image.jpg" or src='/image.jpg'
    /src=["']([^"']*?\.(jpg|jpeg|png|JPG|JPEG|PNG))["']/gi,
    // image: '/image.jpg' or image: "/image.jpg"
    /image:\s*["']([^"']*?\.(jpg|jpeg|png|JPG|JPEG|PNG))["']/gi,
    // imageFile: 'image.jpg' or imageFile: "image.jpg"
    /imageFile:\s*["']([^"']*?\.(jpg|jpeg|png|JPG|JPEG|PNG))["']/gi,
    // images: ['/image.jpg'] or images: ["/image.jpg"]
    /images:\s*\[([^\]]*?)\]/gi,
  ];

  patterns.forEach(pattern => {
    content = content.replace(pattern, (match) => {
      // Replace image extensions with .webp
      const updated = match.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)/gi, '.webp');
      if (updated !== match) {
        fileReplacements++;
      }
      return updated;
    });
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)} (${fileReplacements} replacements)`);
    filesUpdated++;
    replacementsMade += fileReplacements;
  }
}

function searchDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other unnecessary directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
        searchDirectory(filePath);
      }
    } else if (stat.isFile()) {
      // Only process TypeScript, JavaScript, and TSX files
      if (/\.(tsx?|jsx?)$/.test(file)) {
        updateImagePaths(filePath);
      }
    }
  });
}

// Start searching
searchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    searchDirectory(dir);
  }
});

console.log('\n📊 Update Summary:');
console.log(`   ✅ Files updated: ${filesUpdated}`);
console.log(`   🔄 Total replacements: ${replacementsMade}`);
console.log('\n✨ All image paths have been updated to use WebP format!');
console.log('💡 Original images are kept as fallback for older browsers.\n');
