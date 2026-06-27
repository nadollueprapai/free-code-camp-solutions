function isPrime(n) {
    // Numbers less than or equal to 1 are not prime.
    if (n <= 1) { return false };

    // Two is the only even prime number.
    if (n === 2) { return true };

    // Even numbers other than 2 are not prime.
    if (n % 2 === 0) { return false };

    // Check odd numbers up to the square root of our number.
    // The square root of the number is when new factor discoveries are made.
    let boundaryNumber = Math.sqrt(n);
    for (let i = 3; i <= boundaryNumber; i += 2) {
        // If you find a factor, it's not prime.
        if (n % i === 0) { return false };
    }

    // If no factors are found, it is a prime number.
    return true;
}

function sumPrimes(n) {
    // Create a variable to add to and return
    let sumOfPrimes = 0;

    // Loop through all numbers below n.
    for (let i = 0; i <= n; i++) {
        // Check if the number is prime and add it to the sum of primes if true.
        if (isPrime(i)) { sumOfPrimes += i; }
    }

    // Return the sum of prime numbers.
    return sumOfPrimes;
}

console.log(sumPrimes(977))