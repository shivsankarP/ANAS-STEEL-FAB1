import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SCAN_DIRS = [
    path.join(ROOT, 'src', 'assets'),
    path.join(ROOT, 'public'),
];

const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

// Recursively collect all matching image files
function collectImages(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(collectImages(fullPath));
        } else if (EXTENSIONS.includes(path.extname(entry.name))) {
            results.push(fullPath);
        }
    }
    return results;
}

async function convertAll() {
    const images = [];
    for (const dir of SCAN_DIRS) {
        images.push(...collectImages(dir));
    }

    console.log(`\n🔍 Found ${images.length} images to convert...\n`);

    let success = 0, failed = 0, skipped = 0;

    for (const imgPath of images) {
        const ext = path.extname(imgPath);
        const webpPath = imgPath.slice(0, -ext.length) + '.webp';

        // Skip if webp already exists
        if (fs.existsSync(webpPath)) {
            console.log(`⏭  Skipped (already exists): ${path.relative(ROOT, webpPath)}`);
            skipped++;
            continue;
        }

        try {
            await sharp(imgPath)
                .webp({ quality: 85 })
                .toFile(webpPath);

            fs.unlinkSync(imgPath); // remove original
            console.log(`✅ Converted: ${path.relative(ROOT, imgPath)} → .webp`);
            success++;
        } catch (err) {
            console.error(`❌ Failed: ${path.relative(ROOT, imgPath)} — ${err.message}`);
            failed++;
        }
    }

    console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`✅ Converted : ${success}`);
    console.log(`⏭  Skipped   : ${skipped}`);
    console.log(`❌ Failed    : ${failed}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
}

convertAll();
