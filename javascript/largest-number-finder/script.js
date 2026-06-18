function largestOfAll(array) {
    // Create an array to add to and return.
    let arrayOfLargest = new Array();

    // Iterate through the given superarray.
    for (let subArray of array) {
        // Create a variable to define the largest element in this sub-array.
        let largest = 0;
        // Iterate through the sub-array.
        for (let element of subArray) {
            // Check if the element is larger than the largest element.
            if (element > largest) {
                // Set the largest element to the element.
                largest = element;
            }
        }

        // Add the largest element to the array.
        arrayOfLargest.push(largest);
    }
    // Return the array of largest elements.
    return arrayOfLargest;
}

console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))