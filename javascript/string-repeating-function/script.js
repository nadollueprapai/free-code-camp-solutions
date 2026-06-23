function repeatStringNumTimes(string, repeatNumber) {
    // Check if the repeat number is less than or equal to 0.
    if (repeatNumber <= 0) {
        // Return an empty string.
        return "";
    }

    // Create a new string to add to and return.
    let repeatedString = new String();

    // Loop the repeat number of times.
    for (let i = 0; i < repeatNumber; i++) {
        // Add the original string.
        repeatedString += string;
    }

    // Return the repeated string.
    return repeatedString;
}

console.log(repeatStringNumTimes("*", 3))