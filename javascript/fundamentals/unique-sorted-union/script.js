function uniteUnique(...allArrays) {
    // Create an array to add to and return.
    let union = new Array();

    // Iterate through the arrays.
    for (let array of allArrays) {
        // Iterate through each element of the array.
        for (let element of array) {
            // Check if the element is already in the union.
            if (!(union.includes(element))) {
                // If not, add the element to the union.
                union.push(element);
            }
        }
    }

    // Return the union.
    return union;
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))