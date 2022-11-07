// Get the Custom Cursor
var cursor = document.querySelector(".custom-cursor");

// Change the Location of the Custom Cursor when the Mouse is Moved
document.addEventListener("mousemove", e => {
    // Set the new Location of the Custom Cursor
    // An If-Else is avoided by abusing the fact that False is Equal to 0
    cursor.setAttribute("style", "top: " + (e.pageY - (5 + ((cursor.classList.contains("active") * 10)))) + "px; left: "
        + (e.pageX - (6 + ((cursor.classList.contains("active") * 10)))) + "px;");
})