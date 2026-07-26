function countdown(n) {
    // Establish check for n not being a positive integer.
    if (n < 1) {
        return []
    }
    // Establish the base case in which n has reached 1. 
    else if (n === 1) {
        return [1];
    }

    // Call the recursive function with a countdown result.
    let result = countdown(n - 1);

    // Add n the the start of the array.
    result.unshift(n);

    // Pass the array up the chain of function calls.
    return result;
}

console.log(countdown(5));