const Jimp = require('jimp');
const glob = require('glob')
const fs = require('fs-extra');

const imageBase = './src/assets'
const imageDistBase = `${imageBase}/images/`;

fs.removeSync(imageDistBase);
glob(`${imageBase}/*.{jpg,jpeg,png}`, {}, (err, files) => {
  if (err) throw err;
  console.log('🔨 - Building assets...');
  files.forEach(file => {
    const fileBase = file.split(/\.|\//).reverse();
    Jimp.read(file, (error, image) => {
      if (error) throw error;
      [
        { name: 'small', w: 500, h: 200 },
        { name: 'medium', w: 800, h: 200 },
        { name: 'large', w: 1000, h: 300 }
      ].forEach(item => {
        const fileName = `${fileBase[1]}-${item.name}.${fileBase[0]}`;
        image.cover(item.w, item.h)
          .quality(80)
          .write(`${imageDistBase}${fileName}`);
        console.log(`✅ - ${fileName}`)
      });
    });
  });
});
