function titleCase(string) {
  // Create a string to add to and return.
  let titleCasedString = new String()

  // Create a found word variable.
  let foundWord = false;
  // Iterate through the given string.
  for (let char of string) {
    // Check if we are in a word.
    if (foundWord) {
      // Check if the character is a space.
      if (char == " ") {
        // If it is then we are no longer in a word.
        foundWord = false;
        // Add the space to the title cased string.
        titleCasedString += char;
      } else {
        // If it is a character then add the lower case.
        titleCasedString += char.toLowerCase();
      }
    } else {
      // If we are not in a word, search for a word.
      if (!(char == " ")) {
        // If we have found a word, set the variable.
        foundWord = true
        // Add the uppercase of the character to the title cased string.
        titleCasedString += char.toUpperCase();
      }
    }
  }

  // Return the title cased string.
  return titleCasedString
}

console.log(titleCase("I'm a little TEA pot"))