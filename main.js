// menu //
// Only define menu functions when the entire webpage is loaded.
// Since scripts are typically located in the <head> tag, and the <head> tag occurs before
// all of the displayable elements in the <body> tag, the script is run before any of the
// elements exist (in other words, the script is run before any of the elements are loaded
// and are not visible to the script). 
window.onload = initMenu;

// Creating a function that will handle all of our menu functionality
function initMenu() {

	// Getting menu elements
    let icon = document.querySelector('.icon');
    let menu = document.querySelector('.menu');
    let menuLi = document.querySelectorAll('.menu.menu-active');

	// Function for when we click the hamburger menu
    function menuHamburguer(){
    
    	// Generally speaking, toggle means to switch between boolean states. I.e. to 
    	// toggle a value means to turn a value true if false, or to turn a value false
    	// if true.
    	// E.g. a light switch: when you toggle a light switch, you turn it off if on, or
    	// you turn it on if off. 
    	// For the menu, we toggle its visibility (i.e. we show the menu if it hidden or
    	// hide the menu if it is visible). We do this by either adding or removing the
    	// menu-active-active class. The menu-active-active class makes the menu visible when it is
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
