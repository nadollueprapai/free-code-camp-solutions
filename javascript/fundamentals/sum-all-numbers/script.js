function sumAll(array) {
  // Define a number to add to and return.
  let number = new Number();

  // Index the numbers.
  let firstNumber = array[0];
  let secondNumber = array[1];

  // Define the variables outside the condition to bring it into the function scoope.
  let smallerNumber = new Number();
  let biggerNumber = new Number();

  // Determine the smaller of the two numbers in the array.
  if (firstNumber < secondNumber) {
    smallerNumber = firstNumber;
    biggerNumber = secondNumber;
  } else if (firstNumber > secondNumber) {
    smallerNumber = secondNumber;
    biggerNumber = firstNumber;
  } else if (firstNumber == secondNumber) {
    // Return the number(s) if they are equal.
    return firstNumber;
  }

  // Sum all the numbers in between and inclusive.
  for (let i = smallerNumber; i <= biggerNumber; i++) {
    number += i;
  }

  // Return the number
  return number;
}

console.log(sumAll([4,10]));