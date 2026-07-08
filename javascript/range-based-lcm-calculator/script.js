function getPrimeFactors(number) {
    let primeFactors = new Array();

    while (number > 1) {
        // Check if number is divisible by 2.
        if (number % 2 == 0) {
            number /= 2;
            primeFactors.push(2);
            continue
        }

        // Check if number is divisible by odd numbers.
        let divisor = 3;
        while (true) {
            if (number % divisor == 0) {
                number /= divisor;
                primeFactors.push(divisor);
                break;
            }
            // Move to the next odd number.
            divisor += 2;
        }
    }

    // Return the array of prime factors.
    return primeFactors;
}

function smallestCommons(array) {
    // Define the lowest common multiple to eventually return.
    let lcm = 1;

    // Define overarching prime factors;
    let mainPrimeFactorsObject = new Object();

    // Determine a, b where a < b.
    let a = Math.min(...array), b = Math.max(...array);

    // Loop numbers between a and b and inclusive of a and b.
    for (let i = a; i <= b; i++) {
        // Get the prime factors in an array for a given number.
        let iPrimeFactors = getPrimeFactors(i);

        // Convert the prime factors into an object.
        let iPrimeFactorsObject = new Object();
        iPrimeFactors.forEach((factor) => {
            // Either create the factor key or update the factor key's value.
            !iPrimeFactorsObject[factor] ? iPrimeFactorsObject[factor] = 1 : iPrimeFactorsObject[factor]++;
        })

        // Compare the iPrimeFactorsObject to the mainPrimeFactorsObject.
        for (let factor of new Set(iPrimeFactors)) {
            // Check if the mainPrimeFactorsObject has the factor.
            if (!mainPrimeFactorsObject[factor]) {
                // If not, add it.
                mainPrimeFactorsObject[factor] = iPrimeFactorsObject[factor]
            }
            // Check if the mainPrimeFactorsObject needs to be updated.
            else if (mainPrimeFactorsObject[factor] < iPrimeFactorsObject[factor]) {
                // If so, update it.
                mainPrimeFactorsObject[factor] = iPrimeFactorsObject[factor]
            }
        }
    }

    for (let factor_key of Object.keys(mainPrimeFactorsObject)) {
        /* 
        Multiply lowest common multiple variable by the factor 
        raised to the power of the maximum times it occurs in any 
        of the sequential numbers or a and b.
        */
        lcm *= (factor_key ** mainPrimeFactorsObject[factor_key]);
    }

    return lcm;
}

console.log(smallestCommons([23, 18]));