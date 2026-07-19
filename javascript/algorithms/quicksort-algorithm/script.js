function quicksort(array) {
    /*
      Because the function is recursive, make some exceptions first to stop infinite recursion.
  
      We are going to check for if the array is empty or if the array has only one element.
    */

    if (array.length <= 1) {
        return array;
    }

    // We can now select a pivot value from the array;
    const pivotValue = array[0];

    // Create three arrays to store elements equal to, less than and greater than the pivot value.
    let pivotEquivalentArray = new Array();
    let lesserArray = new Array();
    let greaterArray = new Array();

    // Sort the elements based on the pivot value, iterate through each element of the given array.

    // Note: This will also add the pivot value to the pivotEquivalentArray.
    for (let element of array) {
        if (element < pivotValue) {
            lesserArray.push(element);
        } else if (element > pivotValue) {
            greaterArray.push(element);
        } else {
            pivotEquivalentArray.push(element)
        }
    }

    // Call the recursive functions.
    lesserArray = quicksort(lesserArray);
    greaterArray = quicksort(greaterArray);

    // Join up the sorted lesser array, pivot values and greater array.
    const arraySorted = [...lesserArray, ...pivotEquivalentArray, ...greaterArray];

    // Return the complete sorted array.
    return arraySorted;
}

console.log(quicksort([0, 2, 34, 5, 865, 13, 56, 27, 21, 300, 48, 30]));