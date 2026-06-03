function pairElement(string) {
    // Define a DNA Map.
    const dnaMap = new Map([
        ["A", "T"],
        ["T", "A"],
        ["C", "G"],
        ["G", "C"]
    ]);

    // Create an array for adding to and returning.
    let pairs = new Array();

    // Parse the string.
    for (let char of string) {
        // Push the matching DNA pair into the pairs array.
        pairs.push([char, dnaMap.get(char)]);
    }

    // Return the pairs.
    return pairs;
}

console.log(pairElement("ATCGA"));