function reverseString(string) {
    // Create a new string to add to and return.
    let reversedString = new String();

    // Iterate through the string in reverse.
    for (let i = string.length - 1; i >= 0; i--) {
        // Add the character.
        reversedString += string[i];
    }

    // Return the reversed string.
    return reversedString;
}

console.log(reverseString("hello"))