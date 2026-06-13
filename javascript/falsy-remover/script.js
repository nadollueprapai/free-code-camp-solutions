function bouncer(array) {
  // Create an empty array to add to and return.
  let bouncedArray = new Array()


  // Iterate through the elements of the array.
  for (let element of array) {
    // Check if the element is truthy.
    if (element) {
      // If so, add the element to the array.
      bouncedArray.push(element)
    }
  }

  // Return the array.
  return bouncedArray
}

console.log(bouncer([7, "ate", "", false, 9]))