const fs = require('fs');

const files = [
    'src/pages/RecentlyDone.jsx',
    'src/components/Services.jsx',
    'src/components/Hero.jsx',
    'src/components/LogoLoop.jsx',
    'src/components/About.jsx',
    'src/components/Projects.jsx',
    'src/components/Clients.jsx',
];

let totalChanges = 0;

for (const f of files) {
    if (!fs.existsSync(f)) continue;
    let content = fs.readFileSync(f, 'utf8');
    const before = content;
    // Replace .jpg/.jpeg/.png (any case) followed by quote/backtick/space
    content = content.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)(?=['"`\s])/g, '.webp');
    if (content !== before) {
        fs.writeFileSync(f, content, 'utf8');
        const count = (before.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)(?=['"`\s])/g) || []).length;
        totalChanges += count;
        console.log('Updated ' + count + ' references in ' + f);
    } else {
        console.log('No changes needed in ' + f);
    }
}

console.log('\nTotal references updated: ' + totalChanges);
