// import gallery001 from './assets/images/gallery/adiaz-flower.png'; 
// import gallery002 from './assets/images/gallery/adiaz-wood.png'; 

// export {
//     gallery001,
//     gallery002,
// };

const imageFileNames = [
'adiaz-flower.webp', 
'adiaz-wood.webp', 
'header-image.webp',
'adiaz-ice.jpg',];

const importedImages = {};

imageFileNames.forEach((fileName, index) => {
    importedImages[`gallery00${index + 1}`] = require(`./assets/images/gallery/${fileName}`);
  });

  export default importedImages;
