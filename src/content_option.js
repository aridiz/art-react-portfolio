import importedImages from './images_import';

const logotext = "ARIANNA DIAZ";
const meta = {
    title: "Arianna Diaz",
    description: "I’m Arianna Diaz _",
};

const dataportfolio = [];
Object.keys(importedImages).forEach((imageKey, index) => {
    const item = {
      img: importedImages[imageKey].path,
      description: importedImages[imageKey].description,
      alt: importedImages[imageKey].alt,
      link: "#", //TODO change with image url
    };
    dataportfolio.push(item);
  });

const images = [
    {
    //Home image
    imageUrl : importedImages.gallery000.path,
    imageTitle : "home-image",
    imageAlt : "home-image"
},
];

const introdata = {
    title: "I’m Arianna",
    animated: {
        first: "I see things",
        second: "I love TEXTURES and LIGHT ",
        third: "some sense of ALTERED reality",
    },
    description: "this website is my personal exploration of **** inspired by music, psychedelia and illustration",
    your_img_url: images[0].imageUrl,   //Header image
};

const dataabout = {
    title: "a bit about myself",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
// const  = [{
//         jobtitle: "",
//         where: "",
//         date: "",
//     },
//     {
//         jobtitle: "",
//         where: "",
//         date: "",
//     },
// ];

// const skills = [{
//         name: "Python",
//         value: 0,
//     },
//     {
//         name: "Django",
//         value: 0,
//     },
//     {
//         name: "Javascript",
//         value: 0,
//     },
//     {
//         name: "React",
//         value: 0,
//     },
//     {
//         name: "Jquery",
//         value: 0,
//     },
// ];

const services = [
    {
        title: "Service title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const contactConfig = {
    YOUR_EMAIL: "info@ariannadiaz.com",
    // YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "www.linkedin.com/in/diazarianna",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/_.ari._.diaz._/"
};

export {
    meta,
    dataabout,
    dataportfolio,
    // worktimeline,
    // skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    images,
};