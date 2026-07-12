function generatePassword(length) {
  // Define the random string of characters.
  const randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  // Create the password string to add to and return.
  let password = new String();

  // Generate random characters looped equal to the provided password length.
  for (let i = 0; i < length; i++) {
    // Generate an index.
    let randomIndex = Math.round(Math.random() * randomCharacters.length);

    // Slice the random character from the string.
    let randomChar = randomCharacters.slice(randomIndex,randomIndex+1);

    // Add the random character to the password.
    password = password + randomChar;
  }

  // Return the password
  return password;
}

let password = generatePassword(10);

console.log(`Generated password: ${password}`);
