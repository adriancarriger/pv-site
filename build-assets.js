const Jimp = require('jimp');
const glob = require('glob')
const fs = require('fs-extra');

fs.removeSync('./src/assets/images/');
glob('./src/assets/*.jpg', {}, (err, files) => {
  if (err) throw err;
  console.log('🔨 - Building assets...');
  files.forEach(file => {
    Jimp.read(file, (error, image) => {
      if (error) throw error;
      [
        { name: 'small', w: 500, h: 200 },
        { name: 'medium', w: 800, h: 200 },
        { name: 'large', w: 1000, h: 300 }
      ].forEach(item => {
        const fileName = file
          .split('/')
          .reverse()[0]
          .split('.jpg')
          .join(`-${item.name}.jpg`);
        const writeLocation = file
          .split('assets/')
          .join('assets/images/')
          .split('.jpg')
          .join(`-${item.name}.jpg`);
        image.cover(item.w, item.h)
          .quality(80)
          .write(writeLocation);
        console.log(`✅ - ${fileName}`)
      });
    });
  });
});
