function findLongestWordLength(string) {
    // Set longest length as 0 when creating it.
    let longestLength = 0;

    // Split the string into words.
    let words = string.toLowerCase().split(" ");

    // Iterate through the words.
    for (let word of words) {
        // Check if the word is longer than our longest length encountered so far.
        if (word.length > longestLength) {
            // Set the longest length to the word's length.
            longestLength = word.length;
        }
    }

    // Return the longest length.
    return longestLength;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))