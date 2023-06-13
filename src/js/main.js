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
navLink.forEach(n => n.addEventListener('click', linkAction))





