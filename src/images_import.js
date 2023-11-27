const imageFileNames = [
  {
    //first image goes also on homepage
    id: "001",
    fileName: 'adiaz-portrait.webp', //home image
    altText: 'self portrait',
    description: 'self portrait',
  },
  {
    id: "002",
    fileName: 'adiaz-the-eye.png', 
    altText: 'test',
    description: 'description sample',
  },
  {
    id: "003",
    fileName: 'header-image.webp', 
    altText: 'test',
    description: 'description sample',
  },
  {
    id: "004",
    fileName: 'adiaz-aecsplosion.png', 
    altText: 'test',
    description: 'description sample',
  },
  {
    id: "005",
    fileName: 'adiaz-ice.jpg', 
    altText: 'test',
    description: 'description sample',
  },
  {
    id: "006",
    fileName: 'adiaz-flower.jpeg', 
    altText: 'test',
    description: 'description sample',
  },
  {
    id: "007",
    fileName: 'adiaz-wood.jpeg', 
    altText: 'test',
    description: 'description sample',
  },
];
  const importedImages = {};
  
  imageFileNames.forEach((file, index) => {
    // Build file path to export
    // const filePath = `./assets/images/gallery/${file.fileName}`;
    importedImages[`gallery00${index}`] = {
      id: file.id,
      path: require(`./assets/images/gallery/${file.fileName}`),
      description: file.description,
      alt: file.altText,
    };
  });

  export default importedImages;
  
