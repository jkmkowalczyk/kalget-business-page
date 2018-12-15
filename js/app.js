const nav = document.getElementsByTagName("nav")[0];
const aboutHeader1 = document.getElementById("about-header1");
const aboutHeader2 = document.getElementById("about-header2");
const aboutHeader3 = document.getElementById("about-header3");
const aboutHeader4 = document.getElementById("about-header4");
const aboutHeaderImage = document.getElementById("about-header-image");
const aboutDescriptionImage = document.getElementById("about-description-image");
const aboutDescription1 = document.getElementById("about-description1");
const aboutDescription2 = document.getElementById("about-description2");
const offerHeader = document.getElementById("offer-header");
const offerPursemaking = document.getElementById("offer-pursemaking");
const offerShoemaking = document.getElementById("offer-shoemaking");
const offerTools = document.getElementById("offer-tools");
const offerUpholstering = document.getElementById("offer-upholstering");
const offerLeathers = document.getElementById("offer-leathers");
const offerOther = document.getElementById("offer-other");

function animate() {
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

    setTimeout(function () {
        offerPursemaking.classList.add("show-element")
    }, 200);
    setTimeout(function () {
        offerShoemaking.classList.add("show-element")
    }, 400);
    setTimeout(function () {
        offerTools.classList.add("show-element")
    }, 600);
    setTimeout(function () {
        offerUpholstering.classList.add("show-element")
    }, 800);
    setTimeout(function () {
        offerLeathers.classList.add("show-element")
    }, 1000);
    setTimeout(function () {
        offerOther.classList.add("show-element")
    }, 1200);

}

function onScroll() {
    const clientHeight = document.documentElement.clientHeight;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowPosition = clientHeight + scroll;


    let bodyRectTop = document.body.getBoundingClientRect().top;
    let offerHeaderTop = offerHeader.getBoundingClientRect().top - bodyRectTop;
    console.log(windowPosition);
    console.log(offerHeaderTop);
    if (scroll > 10) {
        nav.classList.add("nav-shadow");
    } else {
        nav.classList.remove("nav-shadow")
    }

    if (windowPosition > offerHeaderTop) {
        offerHeader.classList.add("move-element-up");
    }
}

window.onload = animate;
window.addEventListener("scroll", onScroll);
