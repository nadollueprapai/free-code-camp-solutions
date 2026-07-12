function fearNotLetter(string) {
    // Set the starting letter as the first ascii code.
    let currentAsciiCode = string[0].charCodeAt(0);

    // Iterate through the string's character, starting from the second character.
    for (let char of string.slice(1,)) {
        // Get the character code for that character.
        let characterCode = char.charCodeAt(0);
        // Check if its out of place.
        if (!(characterCode == (currentAsciiCode + 1))) {
            // If it is, return the missing letter's character.
            return String.fromCharCode(characterCode - 1);
        }
        // If not out of place, set the current ascii code to the character's code.
        currentAsciiCode = characterCode
    }

    // If not missing letters are found, return undefined.
    return undefined;
}

console.log(fearNotLetter("abce"));