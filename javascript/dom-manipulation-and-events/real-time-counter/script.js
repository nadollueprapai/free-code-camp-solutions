const textInput = document.getElementById("text-input");

const charCount = document.getElementById("char-count")

const maximumCharacters = 50

textInput.addEventListener('input', (event) => {
    let textInBox = event.target.value;

    if (textInBox.length >= maximumCharacters) {
        charCount.innerText = `Character Count: ${maximumCharacters}/${maximumCharacters}`;
        charCount.style.color = "Red";

        textInput.value = textInBox.slice(0, maximumCharacters);
    } else {
        charCount.innerText = `Character Count: ${event.target.value.length}/${maximumCharacters}`;
        charCount.style.color = "Black";
    }
});