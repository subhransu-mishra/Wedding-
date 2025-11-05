const fs = require("fs");
const path = require("path");

// This script compresses images in the public directory
// Run with: node compress-images.js

const publicDir = "./public";
const files = fs.readdirSync(publicDir);

console.log("Image files found:");
files.forEach((file) => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const filePath = path.join(publicDir, file);
    const stats = fs.statSync(filePath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`${file}: ${sizeInMB} MB`);
  }
});

console.log("\nTo compress images, you can:");
console.log("1. Use online tools like TinyPNG or Squoosh");
console.log("2. Use image editing software to reduce quality/size");
console.log("3. Use command line tools like ImageMagick");
console.log(
  "\nRecommended: Reduce images to under 2MB each for better performance."
);
