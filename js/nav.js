/* This js file is responsible for hiding and showing the navigation links 
on the hamburger menu. */

// get the navigation links
let navLinks = document.querySelectorAll(".nav_links");

/* This is a function that allows shows and hides the navigation links, 
when the user clicks on the hamburger menu icon. */
function triggerMenuView() {

    for (let link of navLinks) {
        link.classList.toggle('view');
    }
}