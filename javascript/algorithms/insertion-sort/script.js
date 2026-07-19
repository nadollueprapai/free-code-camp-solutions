// This sort algorithm has quadratic time complexity. In other words, don't use it.
function insertionSort(array) {
    // Create an empty array.
    let sortedArray = new Array();

    // Iterate through the elements of the given array.
    for (let element of array) {
        // Add the element to the sorted array.
        sortedArray.push(element);

        /* 
          Iterate through the elements of the sorted array backwards, starting from the second most recently added element.
        */
        for (let i = (sortedArray.length - 2); i >= 0; i--) {
            // Index the element we are inspecting in sortedArray.
            const inspectedElement = sortedArray[i];

            // Check if the element we are inspecting is more than the element we just added.
            if (inspectedElement > element) {
                // If it is, it is unsorted and we need to swap them.
                [sortedArray[i], sortedArray[i + 1]] = [element, inspectedElement];
            }
            else {
                // Exit prematurely to save time otherwise.
                break
            }
        }
    }

    // Return the sorted array.
    return sortedArray;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));