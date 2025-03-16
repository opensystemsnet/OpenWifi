const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgBuffer = fs.readFileSync(path.join(__dirname, '../src/images/icon.svg'));

sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile(path.join(__dirname, '../src/images/icon.png'))
  .then(() => {
    console.log('Icon generated successfully!');
  })
  .catch((err) => {
    console.error('Error generating icon:', err);
  }); 