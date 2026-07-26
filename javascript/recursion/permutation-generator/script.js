function permuteString(string, prefix = "", results = []) {
    // Check base case if string is empty.
    if (string.length === 0) {
        // Add the permuted string to the results array if its unique.
        if (!results.includes(prefix)) {
          results.push(prefix);
        }

        // Return the results array.
        return results;
    }

    // Iterate through each letter of the string.
    for (let i = 0; i < string.length; i++) {
        // Index the character to be added to the prefix.
        let prefixCharacter = string[i];

        // Retrieve the remaining string after removing the prefix character.
        let remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

        // Call the recursive function with the remaining string, modified prefix and results array.
        permuteString(remainingString, prefix + prefixCharacter, results);
    }

    // Return the modified results array, passing it back up to the initial function call.
    return results;
}

console.log(permuteString("fcc"))