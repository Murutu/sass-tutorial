/*==== SHOW MENU ====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
        });
    };
};

showMenu("nav-toggle", "nav-menu");


/*=== REMOVE MENU MOBILE ===*/

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
// forEach executes a provided function once for each array element
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==== SCROLL SECTIONS ACTIVE LINKS ====*/
const sections = document.querySelectorAll("section[id]"); // all the sections ids

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*" + sectionId + "]").classList.add("active-link")
        } else {
            document.querySelector(".nav__menu a[href*="+ sectionId + "]").classList.remove("active-link")
        }
    })
}

window.addEventListener("scroll" , scrollActive);





