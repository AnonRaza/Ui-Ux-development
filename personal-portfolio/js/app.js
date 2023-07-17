const header = document.querySelector("header");



function stickNav(){
    header.classList.toggle("scrolled",window.pageYOffset > 0);
}
stickNav()
window.addEventListener("scroll",stickNav)

// reveal animation 
let sr = ScrollReveal({
    duration:2500,
    distance:"60px"
})

sr.reveal(".showcase-info",{delay:600});
sr.reveal(".showcase-image",{origin:"top",delay:700});