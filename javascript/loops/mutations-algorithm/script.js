function mutation(array) {
    // Index the strings given to us in the argument array.
    let checkString = array[0];
    let givenString = array[1];

    // Split our string into lowercase parts.
    let letters = checkString.toLowerCase().split("");

    // Iterate through the characters of the second string.
    for (let char of givenString) {
        // Check if the letter is included in our array of letters.
        if (!letters.includes(char.toLowerCase())) {
            // If not, then it has been mutated.
            return false;
        }
    }

    // If it passed, it means that the second string contains letters found only in the first string.
    return true;
}

console.log(mutation(["Noel", "Ole"]))