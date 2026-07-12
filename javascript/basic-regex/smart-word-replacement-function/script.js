function myReplace(string, wordToReplace, wordToReplaceWith) {
    // Define a capitalized version of the word to replace.
    const capitalizedWordToReplace = wordToReplace.charAt(0).toUpperCase() + wordToReplace.toLowerCase().slice(1);

    // Define a capitalized version of the word to replace with.
    const capitalizedWordToReplaceWith = wordToReplaceWith.charAt(0).toUpperCase() + wordToReplaceWith.toLowerCase().slice(1);

    // Create a new string to return.
    let newString;

    // Create the regex filter for lower case with the toLowerCase() method.
    const regexLowerCase = new RegExp(wordToReplace.toLowerCase(), "g");

    // Create the regex filter for upper case with the capitalized version of the word to search for that we defined earlier.
    const regexUpperCase = new RegExp(capitalizedWordToReplace, "g");

    // Replace the lower case occurences.
    newString = string.replace(regexLowerCase, wordToReplaceWith.toLowerCase());

    // Replace the upper case occurences.
    newString = newString.replace(regexUpperCase, capitalizedWordToReplaceWith);

    // Return the string.
    return newString;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));