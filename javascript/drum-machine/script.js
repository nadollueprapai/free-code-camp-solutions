const padBankEl = document.querySelector("#pad-bank")
const drumPadElements = padBankEl.querySelectorAll(".drum-pad");
const display = document.querySelector("#display")

function playAudio(key) {
    // Select the audio from the pad pank element using query selector and the key passed as a parameter.
    const selectedAudio = padBankEl.querySelector(`#${key.toUpperCase()}`)

    // Play the audio track.
    selectedAudio.play();

    // Update the text in display.
    const soundFileString = selectedAudio.parentElement.id
    let soundName = soundFileString.replace(".mp3", "");
    soundName = soundName.replace(/[-_]/gi," ")
    display.innerText = soundName + " played.";

    // Add a color effect to the corresponding sound button.
    selectedAudio.parentElement.classList.add("active")
}

// Iterate through the drum pads.
drumPadElements.forEach(
    (drumPad) => {
        // Add a click event to each drum pad.
        drumPad.addEventListener(
            "click",
            () => {
                playAudio(drumPad.innerText);
            }
        );

        // Detect key presses.
        document.addEventListener(
            "keydown",
            (event) => {
                if (event.key == drumPad.innerText.toLowerCase()) {
                    playAudio(event.key);
                }
            }
        );

        // Detect the event of the audio finishing.
        drumPad.querySelector("audio").addEventListener(
            "ended",
            () => {
                drumPad.classList.remove("active");
            }
        )
    }
)