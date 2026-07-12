function spinalCase(string) {
    // Define a new mutable string deriving from the given string.
    let spinalString = string;

    // Replace spaces with hyphens.
    const spacesRegex = new RegExp(
        "\\s",
        "gm"
    );
    spinalString = spinalString.replace(
        spacesRegex,
        "-"
    );

    // Replace separations by Snake case with hyphens.
    const snakeRegex = new RegExp(
        "_",
        "gm"
    );
    spinalString = spinalString.replace(
        snakeRegex,
        "-"
    );

    // Replace separations by Pascal case with hyphens.
    const pascalRegex = new RegExp(
        "(?<lowerChar>[a-z])(?<upperChar>[A-Z])",
        "gm"
    );
    spinalString = spinalString.replace(
        pascalRegex,
        "$<lowerChar>-$<upperChar>"
    );

    // Convert the entire string to lowercase.
    spinalString = spinalString.toLowerCase();

    // Return the finalized Spinal case string.
    return spinalString;
}

console.log(spinalCase("AllThe-small Things"));