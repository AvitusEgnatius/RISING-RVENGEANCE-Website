// Get the Scroll Container
var scrollContainer = document.querySelector('.section-container');
// Create a variable that indicates whether the Scroll Container is scrollable 
var scrollable = true;

// Intercept the Mouse Wheel Scroll Event
// The function executes before the scroll
scrollContainer.addEventListener('wheel', scrollOnce, { passive: false });

// Lets the user Scroll Once with the Mouse Wheel to trigger Scroll Snap,
// after which Scrolling is disabled for a short amount of time
function scrollOnce(wheelEvent) {
    // If the Scroll Container is scrollable...
    if (scrollable) {
        // Scroll by the vertical scroll amount
        scrollContainer.scrollBy(0, wheelEvent.deltaY);
        // Disable Scrolling
        scrollable = false;
        // After a short time enable Scrolling
        setTimeout(() => {
            scrollable = true;
        }, 800);
    }

    // Prevent the Default Event of Wheel Scroll
    wheelEvent.preventDefault();
}