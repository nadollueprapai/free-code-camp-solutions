function largestOfAll(array) {
    // Create an array to add to and return.
    let arrayOfLargest = new Array();

    // Iterate through the given superarray.
    for (let subArray of array) {
        // Create a variable to define the largest element in this sub-array.
        let largest = -Infinity;
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

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))