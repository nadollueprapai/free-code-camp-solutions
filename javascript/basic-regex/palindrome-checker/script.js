// Select the functional elements using querySelector.
const textInputEl = document.querySelector("#text-input");
const checkButtonEl = document.querySelector("#check-btn");
const resultEl = document.querySelector("#result");

function performCheck() {
    // Get the actual text inputted into the text input element.
    const textInput = textInputEl.value;

    // Check if text input is empty.
    if (!textInput) {
        // If so, alert the user.
        alert("Please input a value");
        return;
    }

    // Use RegEx to filter out non-alphanumeric characters.
    const alphanumericRegEx = /[a-zA-Z0-9]+/gi;
    const alphanumericMatches = textInput.match(alphanumericRegEx);

    // Join up the matches and convert the phrase to lowercase.
    let alphanumericPhrase = alphanumericMatches.join("").toLowerCase();

    // Define a reversed version.
    let reversedPhrase = alphanumericPhrase.split("").reverse().join("");

    // Check if the phrase is the same reversed.
    if (alphanumericPhrase == reversedPhrase) {
        // It is palindromic.
        resultEl.innerHTML = `${textInput} is a palindrome.`
    } else {
        // It is not palindromic.
        resultEl.innerHTML = `${textInput} is not a palindrome.`
    }

}

// Add a click event to the check button.
checkButtonEl.addEventListener(
    "click",
    () => {
        performCheck();
    }
)