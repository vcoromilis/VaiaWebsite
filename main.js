// menu //
// Only define menu functions when the entire webpage is loaded.
window.onload = initMenu;

// Creating a function that will handle all of our menu functionality
function initMenu() {

	// Getting menu elements
    let icon = document.querySelector('.icon');
    let menu = document.querySelector('.menu');
    let menuLi = document.querySelectorAll('.menu.menu-active');

	// Function for when we click the hamburger menu
    function menuHamburguer(){
    
    	// The menu-active-active class makes the menu visible when it is
    	// attached to the menu, and hidden otherwise.
    	
        menu.classList.toggle('menu-active-active');
    }

	// Add an event listener to listen for when the hamburger is clicked.
    icon.addEventListener('click', menuHamburguer);
    
    // Add an event listener to close the menu once a link (or menu item) is clicked
    menuLi.forEach((item) => {
        item.addEventListener('click', menuHamburguer);
    });
}
