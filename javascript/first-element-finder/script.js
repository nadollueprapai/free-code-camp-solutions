function findElement(array, givenFunction) {
    // Iterate through the array.
    for (let index = 0; index < array.length; index++) {
        // Index the element.
        let indexedElement = array[index];

        // Check if the element passes the function.
        if (givenFunction(indexedElement)) {
            // Return the element.
            return indexedElement;
        }
    }
}

console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }))