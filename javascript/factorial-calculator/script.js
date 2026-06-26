let num = 10

function factorialCalculator(number) {
    // Create a result variable to multiply and return.
    let result = 1

    // Loop to multiply.
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    // Return the result.
    return result
}

let factorial = factorialCalculator(num)

let resultMsg = `Factorial of ${num} is ${factorial}`

console.log(resultMsg)