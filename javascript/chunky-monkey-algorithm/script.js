function chunkArrayInGroups(...args) {
    // Index the arguments.
    let arrayToChunk = args[0];
    let chunkSize = args[1];

    // Determine the number of chunks, accounting for incomplete chunks.
    let chunkNumber = Math.ceil(arrayToChunk.length / chunkSize);

    // Create an array to add to and return.
    let chunkArray = new Array();


    for (let i = 0; i < chunkNumber; i++) {
        // Create a chunk as an array of elements.
        let chunk = new Array();

        // Iterate through some elements to add to the chunk.
        for (let o = 0; o < chunkSize; o++) {
            // Index the element.
            let elementToAdd = arrayToChunk[(i * chunkSize) + o]

            // Check if the element exists/is in range.
            if (typeof elementToAdd === "undefined") {
                // If its not, exit the loop.
                break;
            }

            // Add the element to the chunk.
            chunk.push(elementToAdd);
        }

        // Add the chunk to the array of chunks.
        chunkArray.push(chunk);
    }

    // Return the array of chunks.
    return chunkArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))