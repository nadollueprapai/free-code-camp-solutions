function frankenSplice(arrayOne, arrayTwo, index) {
    // Create an array to add to and return.
    let array = new Array();

    // Iterate through array two until index is reached.
    for (let i = 0; i < index; i++) {
        array.push(arrayTwo[i]);
    }

    // Iterate through array one.
    for (let i = 0; i < arrayOne.length; i++) {
        array.push(arrayOne[i]);
    }


    // Iterate through the rest of array two.
    for (let i = index; i < arrayTwo.length; i++) {
        array.push(arrayTwo[i]);
    }

    // Return the array.
    return array;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))