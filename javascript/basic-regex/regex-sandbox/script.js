const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
    let flagString = new String();
    if (caseInsensitiveFlag.checked) {
        flagString += "i"
    }
    if (globalFlag.checked) {
        flagString += "g"
    }
    return flagString;
}

function runTest() {
    // Save the flags to a variable.
    const flagsToApply = getFlags();

    // Form the regular expression with a string literal and apply the flags.
    const regex = new RegExp(
        `(?<pattern>${regexPattern.value})`,
        flagsToApply
    )

    // Check for a lack of matches.
    if (!regex.test(stringToTest.innerHTML)) {
        testResult.innerText = "no match";
        return
    }

    // Use the match method to store an array of matches.
    const matchArray = stringToTest.innerHTML.match(regex);
    // If we matched one occurence then groups should appear.
    if (matchArray.groups) {
        testResult.innerText = matchArray[0];
    }
    // If there is no groups key, check if the matchArray has elements.
    else if (matchArray) {
        testResult.innerText = matchArray.join(", ")
    }

    // Add the highlights by setting the input box's innerHTML value to a match-replaced version.
    stringToTest.innerHTML = stringToTest.innerHTML.replace(
        regex,
        `<span class="highlight">$<pattern></span>`
    );
}

// Add the event listener to the test button.
testButton.addEventListener(
    "click",
    () => runTest()
)