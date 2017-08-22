var Jimp = require("jimp");

Jimp.read('../src/assets/beach-day.jpg', (error, image) => {
  if (error) throw error;
  image.cover(500, 200)
    .quality(60)
    .write("../src/assets/images/beach-day.jpg");
});
