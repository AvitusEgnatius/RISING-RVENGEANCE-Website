// Get the Scroll Container
var scrollContainer = document.querySelector(".section-container");
// Get all Revealable Elements
var revealableElements = document.querySelectorAll(".revealable");
// Get the Interior Height of the Window
var windowHeight = window.innerHeight;

// Reveal all of the Visible Revealable Elements
function revealVisibleElements() {
    // Go through every Revealable Element...
    for (index = 0; index < revealableElements.length; index++) {

        // Get the Element's Position relative to the top of the Window
        let elementOffsetTop = revealableElements[index].getBoundingClientRect().top;

        // If the Element is in view...
        if (elementOffsetTop < windowHeight) {
            // ...Reveal it
            revealableElements[index].classList.add("reveal");
        }

    }
}

// Reveal visible Revelable Elements on scroll
scrollContainer.addEventListener("scroll", revealVisibleElements);

// Reveal Elements on the Landing Page
revealVisibleElements();