
document.addEventListener("DOMContentLoaded", () => {

    // Get HTML elements
   const openLetterButton = document.getElementById("openLetter");
const welcomeScreen = document.getElementById("welcomeScreen");
const letterScreen = document.getElementById("letterScreen");
const backgroundMusic = document.getElementById("backgroundMusic");

openLetterButton.addEventListener("click", () => {

    // Hide the welcome screen
    welcomeScreen.classList.add("hidden");

    // Show the birthday letter
    letterScreen.classList.remove("hidden");

    // Play background music
    backgroundMusic.play().catch((error) => {
        console.log("Music could not play:", error);
    });

});

    // Music toggle
    if (musicToggle && backgroundMusic) {

        musicToggle.addEventListener("click", () => {

            if (backgroundMusic.paused) {

                backgroundMusic.play().then(() => {
                    musicToggle.textContent = "♫ Music: ON";
                }).catch(() => {
                    console.log("Music playback failed.");
                });

            } else {

                backgroundMusic.pause();
                musicToggle.textContent = "♫ Music: OFF";

            }

        });

    }

});
