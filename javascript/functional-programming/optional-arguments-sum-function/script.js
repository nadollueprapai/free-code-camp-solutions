// Create a function to check if a variable is a number.
function isNumber(variable) {
    return (typeof variable === "number");
}

// Create a function with a rest parameter (...args) to handle multiple arguments.
function addTogether(...args) {
    // If the function receives two arguments...
    if (args.length == 2) {
        // ...first check for validity.
        if (!isNumber(args[0]) || !isNumber(args[1])) {
            return undefined;
        }

        // ...then return the sum of the arguments.
        return args[0] + args[1];
    }
    // If only one argument is provided...
    else if (args.length == 1) {
        // ...first check for validity.
        if (!isNumber(args[0])) {
            return undefined;
        }

        // ...define a function such that when the function is called with a single argument it should return the sum.
        const sumArgumentFunction = (secondNumberProvided) => {
            // Within the function that we return, we could also check that the variable they provide is a number.
            if (!isNumber(secondNumberProvided)) {
                return undefined;
            }

            // Alternatively, we can just pass it to the overarching function.
            return addTogether(args[0], secondNumberProvided);
        }

        // Return the function.
        return sumArgumentFunction;
    }
}

console.log(addTogether(2, 3));
console.log(addTogether(5)(7));
console.log(addTogether(2)("3"));