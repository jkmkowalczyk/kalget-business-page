// elements
const nav = document.getElementsByTagName("nav")[0];
const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const offerLink = document.getElementById("offer-link");
const contactLink = document.getElementById("contact-link");
const locationLink = document.getElementById("location-link");
const aboutHeader = document.getElementById("about-header");
const aboutHeader1 = document.getElementById("about-header1");
const aboutHeader2 = document.getElementById("about-header2");
const aboutHeader3 = document.getElementById("about-header3");
const aboutHeader4 = document.getElementById("about-header4");
const aboutHeaderImage = document.getElementById("about-header-image");
const aboutSection = document.getElementById("about-description-container");
const aboutDescriptionImage = document.getElementById("about-description-image");
const aboutDescription1 = document.getElementById("about-description1");
const aboutDescription2 = document.getElementById("about-description2");
const offerSection = document.getElementById("offer");
const offerHeader = document.getElementById("offer-header");
const offerPursemaking = document.getElementById("offer-pursemaking");
const offerShoemaking = document.getElementById("offer-shoemaking");
const offerTools = document.getElementById("offer-tools");
const offerUpholstering = document.getElementById("offer-upholstering");
const offerLeathers = document.getElementById("offer-leathers");
const offerOther = document.getElementById("offer-other");
const businessCardContainer = document.getElementById("business-card-container");
const businessCard = document.getElementById("business-card");
const contactSection = document.getElementById("contact");
const locationSection = document.getElementById("location");
const map = document.getElementById("map");
const copyright = document.getElementById("copyright");
const copyrightText = document.getElementById("copyright-text");

// positions
const siteHeight = document.body.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
const bodyRectTop = document.body.getBoundingClientRect().top;
const aboutSectionTop = aboutSection.getBoundingClientRect().top - bodyRectTop;
const offerSectionTop = offerSection.getBoundingClientRect().top - bodyRectTop;
const contactSectionTop = contactSection.getBoundingClientRect().top - bodyRectTop;
const locationSectionTop = locationSection.getBoundingClientRect().top - bodyRectTop;
const copyrightTop = copyright.getBoundingClientRect().top - bodyRectTop;


function setActiveLink() {
    const scroll = window.pageYOffset + 1 || document.documentElement.scrollTop + 1;
    if (scroll < aboutSectionTop) {
        homeLink.classList.add("active-link");
    } else {
        homeLink.classList.remove("active-link");
    }

    if (scroll >= aboutSectionTop && scroll < offerSectionTop) {
        aboutLink.classList.add("active-link");
    } else {
        aboutLink.classList.remove("active-link");
    }
    if (scroll >= offerSectionTop && scroll < contactSectionTop) {
        offerLink.classList.add("active-link");
    } else {
        offerLink.classList.remove("active-link");
    }

    if (scroll >= contactSectionTop && scroll < locationSectionTop) {
        contactLink.classList.add("active-link");
    } else {
        contactLink.classList.remove("active-link");
    }

    if (scroll >= locationSectionTop) {
        locationLink.classList.add("active-link");
    } else {
        locationLink.classList.remove("active-link");
    }
}


function onScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowPosition = clientHeight + scroll;
    setActiveLink();

    if (scroll > 10) {
        nav.classList.add("nav-shadow");
    } else {
        nav.classList.remove("nav-shadow");
    }

    aboutHeader.classList.add("show-element");
    aboutHeader1.classList.add("show-element");
    setTimeout(function () {
        aboutHeader2.classList.add("move-element-right")
    }, 200);
    setTimeout(function () {
        aboutHeader3.classList.add("move-element-right")
    }, 300);
    setTimeout(function () {
        aboutHeader4.classList.add("move-element-right")
    }, 400);
    setTimeout(function () {
        aboutHeaderImage.classList.add("move-element-left")
    }, 200);

    aboutDescriptionImage.classList.add("show-element");
    aboutDescription1.classList.add("move-element-up");
    setTimeout(function () {
        aboutDescription2.classList.add("move-element-up")
    }, 200);

    const offerHeaderTop = offerHeader.getBoundingClientRect().top - bodyRectTop;
    if (windowPosition > offerHeaderTop) {
        offerHeader.classList.add("move-element-up");
    }

    const offerPursemakingTop = offerPursemaking.getBoundingClientRect().top - bodyRectTop;
    const offerToolsTop = offerTools.getBoundingClientRect().top - bodyRectTop;
    const offerLeathersTop = offerLeathers.getBoundingClientRect().top - bodyRectTop;
    if (windowPosition > offerPursemakingTop) {
        offerPursemaking.classList.add("show-element");
        setTimeout(function () {
            offerShoemaking.classList.add("show-element")
        }, 200);
    }
    if (windowPosition > offerToolsTop) {
        offerTools.classList.add("show-element");
        setTimeout(function () {
            offerUpholstering.classList.add("show-element")
        }, 200);
    }
    if (windowPosition > offerLeathersTop) {
        offerLeathers.classList.add("show-element");
        setTimeout(function () {
            offerOther.classList.add("show-element")
        }, 200);
    }

    if (windowPosition > locationSectionTop) {
        businessCard.classList.add("show-element");
        setTimeout(function () {
            map.classList.add("show-element")
        }, 200);
    }

    console.log(windowPosition > copyrightTop);
    if (windowPosition > copyrightTop) {
        copyrightText.classList.add("show-element");
    }


}

function toggleMenu() {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menuList.classList.remove("show-menu");
    } else {
        menu.classList.add("open");
        menuList.classList.add("show-menu");
    }
}

window.addEventListener("load", onScroll);
window.addEventListener("scroll", onScroll);
menu.addEventListener("click", toggleMenu);


function scrollHome() {
    window.scrollTo(0, 0);
}

function scrollAbout() {
    window.scrollTo(0, aboutSectionTop);
}

function scrollOffer() {
    window.scrollTo(0, offerSectionTop);
}

function scrollContact() {
    window.scrollTo(0, contactSectionTop);
}

function scrollLocation() {
    window.scrollTo(0, locationSectionTop);
}


homeLink.addEventListener("click", scrollHome);
aboutLink.addEventListener("click", scrollAbout);
offerLink.addEventListener("click", scrollOffer);
contactLink.addEventListener("click", scrollContact);
locationLink.addEventListener("click", scrollLocation);