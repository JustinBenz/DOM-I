const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const nav1 = document.querySelector('a:nth-of-type(1)');
nav1.textContent = siteContent.nav["nav-item-1"];
const nav2 = document.querySelector('a:nth-of-type(2)');
nav2.textContent = siteContent.nav["nav-item-2"];
const nav3 = document.querySelector('a:nth-of-type(3)');
nav3.textContent = siteContent.nav["nav-item-3"];
const nav4 = document.querySelector('a:nth-of-type(4)');
nav4.textContent = siteContent.nav["nav-item-4"];
const nav5 = document.querySelector('a:nth-of-type(5)');
nav5.textContent = siteContent.nav["nav-item-5"];
const nav6 = document.querySelector('a:nth-of-type(6)');
nav6.textContent = siteContent.nav["nav-item-6"];
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const ctah = document.querySelector('.cta h1');
ctah.textContent = siteContent.cta["h1"];
const ctabutt = document.querySelector('.cta button');
ctabutt.textContent = siteContent.cta["button"]
const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute("src", siteContent.cta["img-src"]);


const mcTopH = document.querySelector('.main-content .top-content .text-content h4');
mcTopH.textContent = siteContent["main-content"]["features-h4"];
const mcTopP = document.querySelector('.main-content .top-content .text-content p');
mcTopP.textContent = siteContent["main-content"]["features-content"];
const mcTopH2 = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) h4');
mcTopH2.textContent = siteContent["main-content"]["about-h4"];
const mcTopP2 = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) p');
mcTopP2.textContent = siteContent["main-content"]["about-content"];
const mcMidImg = document.getElementById('middle-img');
mcMidImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


const mcBotH = document.querySelector(".main-content .bottom-content .text-content h4");
mcBotH.textContent = siteContent["main-content"]["services-h4"];
const mcBotP = document.querySelector(".main-content .bottom-content .text-content p");
mcBotP.textContent = siteContent["main-content"]["services-content"];
const mcBotH2 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) h4");
mcBotH.textContent = siteContent["main-content"]["product-h4"];
const mcBotP2 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) p");
mcBotP2.textContent = siteContent["main-content"]["product-content"];
const mcBotH3 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) h4");
mcBotH3.textContent = siteContent["main-content"]["vision-h4"];
const mcBotP3 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) p");
mcBotP3.textContent = siteContent["main-content"]["vision-content"];


const contactH = document.querySelector('.contact h4');
contactH.textContent = siteContent["contact"]["contact-h4"];
const contactP = document.querySelector('.contact p');
contactP.textContent = siteContent["contact"]["address"];
const contactP2 = document.querySelector('.contact p:nth-of-type(2)');
contactP2.textContent = siteContent["contact"]["phone"];
const contactP3 = document.querySelector('.contact p:nth-of-type(3)');
contactP2.textContent = siteContent["contact"]["email"];


const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

const newHeader = document.createElement("a")

document.querySelector("nav").appendChild("newHeader")
document.querySelector("nav").appendChild("newHeader")

const allLinks = document.querySelectorAll("nav a");
const rArray = Array.from(allLinks);
rArray.forEach( item => item.style.color = "green")