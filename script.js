const contactPopUp = document.querySelector(".home .button_container button");
const navContactPopUp = document.querySelector(".nav_contact_popup");
const contactContainer = document.querySelector(".contact_container");
const CloseButton = document.querySelector('.close_form');
const Body = document.querySelector("body");

contactPopUp.addEventListener("click", () => {
    contactContainer.style.display = "flex";
    Body.classList.add('stop_scroll')
})

navContactPopUp.addEventListener("click", () => {
    contactContainer.style.display = "flex";
    Body.classList.add('stop_scroll')
})

CloseButton.addEventListener("click", () => {
    contactContainer.style.display = "none";
    Body.classList.remove('stop_scroll')
})

//nav toggle at small screen device 
const navbarToggler = document.querySelector(".navbar_toggler");
const navs = document.querySelector('.navbar nav .navs ul');
console.log(navbarToggler)
console.log(navs)

navbarToggler.addEventListener("click", () => {
    navs.classList.toggle('navbar_active');
})

navs.addEventListener("click", () => {
    navs.classList.remove("navbar_active");
})