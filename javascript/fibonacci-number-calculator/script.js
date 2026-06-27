function fibonacci(n) {
    // Initialize the sequence array.
    let sequence = [0, 1];

    // Loop through until the sequence is large enough to index the n-th position number.
    while (sequence.length <= n) {
        // Index the last element.
        let lastIndex = sequence.length - 1;
        // Determine the next number according to the fibonacci sequence.
        let nextNumber = sequence[lastIndex] + sequence[lastIndex - 1];
        // Add the next number to the sequence.
        sequence.push(nextNumber);
    }

    // Return the n-th element of the sequence, which should be the n-th position number.
    return sequence[n];
}

console.log(fibonacci(15))