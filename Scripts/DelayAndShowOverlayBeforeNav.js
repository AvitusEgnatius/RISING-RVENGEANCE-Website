// Get Navbar Links
var navbarLinks = document.querySelectorAll('.navbar .link');
// Get Navigation Transition Overlay
var navTransOverlay = document.querySelector('.nav-transition-overlay');

// 500 miliseconds after the page is loaded
// Remove the visible Class from the Navigation Transition Overlay
setTimeout(() => {
    navTransOverlay.classList.toggle('visible')
}, 500);

// For every Navbar Link....
for (let index = 0; index < navbarLinks.length; index++) {

    // Get Current Navbar Link
    let navbarLink = navbarLinks[index];

    // Delay and Show Navigation Transition Overlay Overlay on click 
    navbarLink.addEventListener('click', DelayAndShowOverlayBeforeNavigation);
}

// Delay the Navigation 
// and Show the Navigation Transition Overlay during the Delay
function DelayAndShowOverlayBeforeNavigation(clickEvent) {
    // Prevent Instant Navigation
    clickEvent.preventDefault();

    // Get the Target href of the Event
    let targetHref = clickEvent.target.href;

    // Toggle the visibility of the Navigation Transition Overlay
    navTransOverlay.classList.toggle('visible');

    // After 500 miliseconds Navigate to the Target href
    setInterval(() => {
        window.location.href = targetHref;
    }, 500);

};