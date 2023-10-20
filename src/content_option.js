
const logotext = "ARIANNA DIAZ";
const meta = {
    title: "Arianna Diaz",
    description: "I’m Arianna Diaz _",
};

const images = [
    {
    imageUrl : "./assets/images/gallery/adiaz-flower.png",
    imageTitle : "header",
    imageAlt : "flower photograph"
},
{
    imageUrl : "./assets/images/gallery/adiaz-wood.png",
    imageTitle : "header",
    imageAlt : "wood photograph"
},];

const introdata = {
    title: "I’m Arianna",
    animated: {
        first: "I see things",
        second: "I see ------------",
        third: "just a girl who loves textures and light",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: images[0].imageUrl,   //Header image
};


const dataabout = {
    title: "a bit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "",
        where: "",
        date: "",
    },
    {
        jobtitle: "",
        where: "",
        date: "",
    },
];

const skills = [{
        name: "Python",
        value: 0,
    },
    {
        name: "Django",
        value: 0,
    },
    {
        name: "Javascript",
        value: 0,
    },
    {
        name: "React",
        value: 0,
    },
    {
        name: "Jquery",
        value: 0,
    },
];

const services = [
    {
        title: "Service title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: images[0].imageUrl,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: images[0].imageUrl,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
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
    linkedin: "https://linkedin.com",
    // twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/_.ari._.diaz._/"
};



export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    images,
};