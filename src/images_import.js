const imageFileNames = [
  {
    //first image goes also on homepage
    fileName: 'adiaz-portrait.webp', //home image
    altText: 'self portrait',
    description: 'self portrait',
  },
  {
    fileName: 'header-image.webp', 
    altText: 'test',
    description: 'description sample',
  },
  {
    fileName: 'adiaz-ice.jpg', 
    altText: 'test',
    description: 'description sample',
  }
];

  const importedImages = {};
  
  imageFileNames.forEach((file, index) => {
    // Build file path to export
    // const filePath = `./assets/images/gallery/${file.fileName}`;
    importedImages[`gallery00${index}`] = {
      path: require(`./assets/images/gallery/${file.fileName}`),
      description: file.description,
      alt: file.altText,
    };
  });

  export default importedImages;
  
