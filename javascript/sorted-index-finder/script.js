function getIndexToIns(array, number) {
    // Define the index to return.
    let indexToInsert = new Number();

    // Sort array in ascending order.
    array = array.sort((a, b) => a - b);

    /*
      Search for the index at which the given number would belong
      by checking for an element equal to or more than our number.
    */
    let searchResult = array.findIndex((element) => element >= number);

    // Check if the given number is larger than all elements in the array.
    if (searchResult === -1) {
        // If the given number would be the largest, set the index to the length of the array.
        indexToInsert = array.length;
    } else {
        // Otherwise, set the return result to the search result.
        indexToInsert = searchResult;
    }

    // Return the index at which our given number should be inserted.
    return indexToInsert;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));