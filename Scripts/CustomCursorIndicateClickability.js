// Get the Custom Cursor
var cursor = document.querySelector(".custom-cursor");
// Get Clickable Elements
var clickableElements = document.querySelectorAll("a, .highlight.audio");

// For each Clickable Element...
for (let index = 0; index < clickableElements.length; index++) {
    const clickableElement = clickableElements[index];

    // Toggle the Clickability Indicator of the Custom Cursor when it Enters the Clickable Element
    clickableElement.addEventListener('mouseenter', ToggleCustomCursorClickabilityIndicator)

    // Toggle the Clickability Indicator of the Custom Cursor when it Exits the Clickable Element
    clickableElement.addEventListener('mouseleave', ToggleCustomCursorClickabilityIndicator)
}

// Toggle the Clickability Indicator of the Custom Cursor
function ToggleCustomCursorClickabilityIndicator() {
    // Toggle the Clickability Indicator
    cursor.classList.toggle("clickable");
}
