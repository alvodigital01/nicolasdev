const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const QUALITY = 85;
const INPUT_DIR = path.join(__dirname, "../public/images");

function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function convertGif(inputPath, outputPath) {
  await sharp(inputPath, { animated: true, limitInputPixels: false })
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(outputPath);
}

async function convertStatic(inputPath, outputPath) {
  await sharp(inputPath)
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(outputPath);
}

async function main() {
  const files = getAllFiles(INPUT_DIR);
  const targets = files.filter(f => /\.(png|jpg|jpeg|gif)$/i.test(f));

  console.log(`Converting ${targets.length} images to WebP (quality ${QUALITY})...\n`);

  for (const file of targets) {
    const ext = path.extname(file);
    const outputPath = file.replace(new RegExp(`\\${ext}$`, "i"), ".webp");
    const rel = path.relative(INPUT_DIR, file);

    try {
      if (ext.toLowerCase() === ".gif") {
        await convertGif(file, outputPath);
      } else {
        await convertStatic(file, outputPath);
      }
      const origSize = fs.statSync(file).size;
      const newSize = fs.statSync(outputPath).size;
      const saved = (((origSize - newSize) / origSize) * 100).toFixed(1);
      console.log(`✓ ${rel}  ${(origSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (-${saved}%)`);
      fs.unlinkSync(file);
    } catch (err) {
      console.error(`✗ ${rel}: ${err.message}`);
    }
  }

  console.log("\nDone!");
}

main();
