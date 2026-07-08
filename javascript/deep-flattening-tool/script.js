function pierceElement(arrayToAddTo, element) {
    // Check if the given element is an array.
    if (Array.isArray(element)) {
        // If it is, iterate through each element of the array.
        element.forEach((innerElement) => {
            // For every element in the array, dive deeper.
            return pierceElement(arrayToAddTo, innerElement);
        })
    } else {
        // If you find a non-array element, add it to the steamrolled array, for non-array elements.
        arrayToAddTo.push(element);
    }
}

function steamrollArray(array) {
    // Define an array to store non-array elements.
    let steamrolledArray = new Array();

    // Pierce each element of the given array, adding non-array elements to our steamrolled array.
    array.forEach((element, index, array) => {
        pierceElement(steamrolledArray, element);
    })

    // Return our steamrolled array.
    return steamrolledArray;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));