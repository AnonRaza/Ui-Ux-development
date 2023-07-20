// togglebar menu 

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close"),
      navLink = document.querySelector("nav_link")


if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}


if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}

const navLinks = document.querySelectorAll(".nav_link");
function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLinks.forEach(element => {
    element.addEventListener("click",linkAction)
});


// change header background 
function scrollHeader(){
    const header = document.getElementById("header")

    if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener('scroll',scrollHeader)


// scrll up 

function scrollup(){
    const scrollup = document.getElementById("scroll-up");

    if(this.scrollY >= 200) scrollup.classList.add("show-scroll"); else scrollup.classList.remove("show-scroll")
}
window.addEventListener("scroll",scrollup)



// active links 

const sections = document.querySelectorAll("section[id]");


function scrollActive(){
    const scrollY = window.pageYOffset



    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active-link')
        }

    })

}
window.addEventListener('scroll',scrollActive)