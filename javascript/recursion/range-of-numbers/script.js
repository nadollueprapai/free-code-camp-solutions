function rangeOfNumbers(startNum, endNum) {
    // Establish a base case in which startNum is equivalent to endNum.
    if (startNum === endNum) {
        return [startNum];
    }

    // Call the recursive function incrementing the start number.
    let result = rangeOfNumbers(startNum + 1, endNum);

    // Add a number to the start of the array as the stack resolves.
    result.unshift(startNum);

    // Pass the result back to whatever called it.
    return result;
}

console.log(rangeOfNumbers(1, 10))