function selectionSort(array) {
    // Define an empty array to populate.
    let sortedArray = new Array();

    // We will array length or size in a constant.
    const arrayLength = array.length;

    // Iterate through a loop array ".length" or ".size" times. Notice that we use a constant since the array will be mutated.
    for (let i = 0; i < arrayLength; i++) {
        // Determine the smallest element remaining in the array.
        const smallestElement = Math.min(...array);

        // Get the index of the smallest element in the remaining array.
        const indexOfSmallestElement = array.indexOf(smallestElement);

        // Splice the element out of the array.
        array.splice(indexOfSmallestElement, 1);

        // Add the smallest element to our sorted array.
        sortedArray.push(smallestElement);
    }

    // Return the sorted array.
    return sortedArray;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))