function dropElements(arr, func) {
  // Iterate through the array.
  for (let item of arr) {
    // Check if the item passes the function.
    if (func(item)) {
      // Return the array
      return arr.slice(arr.indexOf(item));
    }
  }

  //Return an empty array.
  return []
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))