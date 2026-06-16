function pyramid(patternCharacter, rows, isUpsideDown) {
  // Create a string to add to and return.
  let pyramidString = new String();
  
  // Check if the pyramid is meant to be upside down.
  if (!(isUpsideDown)) {
    // Iterate through the number of rows in the pyramid.
    for(let i = 1; i <= rows; i++) {
      // Determine the spaces.
      let spaces = (" ").repeat(rows - i)
      // Determine the pattern characters for that row.
      let characters = patternCharacter.repeat(i) + patternCharacter.repeat(i-1)
      // Add them to the string, complete with a new line.
      pyramidString += ("\n" + spaces + characters)
    }
  } else {
    // Repeat above, but starting from the max number of rows.
    for(let i = rows; i >= 1; i--) {
      let spaces = (" ").repeat(rows - i)
      let characters = patternCharacter.repeat(i) + patternCharacter.repeat(i-1)
      pyramidString += ("\n" + spaces + characters)
    }
  }
  // Complete the freeCodeCamp solution with a new line.
  pyramidString += "\n"

  // Return the completed pyramid string.
  return pyramidString;
}

console.log(pyramid("o", 4, false));