// Get all Play Audio Elements
var playAudioElements = document.querySelectorAll(".highlight.audio");

// For each Play Audio Element...
for (var index = 0; index < playAudioElements.length; index++) {

    // Get the specific Play Audio Element
    let playAudioElement = playAudioElements[index];

    // Get a Specific Sound File using the Element's id
    let audioFile = new Audio("../Media/" + playAudioElement.id + ".mp3");

    audioFile.onended = function () {
        // Update the Text so that the User can tell that they can Play the Audio Sample
        playAudioElement.innerHTML = "Play Audio Sample";
    }

    // Play or Pause a Specific Sound File when the Element is clicked
    playAudioElement.addEventListener("click", () => {

        if (audioFile.paused) {

            // Play the Specific Sound File
            audioFile.play();

            // Update the Text so that the User can tell that they can Pause the Audio Sample
            playAudioElement.innerHTML = "Pause Audio Sample";

        }
        else {

            // Pause the Specific Sound File
            audioFile.pause();

            // Update the Text so that the User can tell that they can Play the Audio Sample
            playAudioElement.innerHTML = "Play Audio Sample";

        }

    })
}