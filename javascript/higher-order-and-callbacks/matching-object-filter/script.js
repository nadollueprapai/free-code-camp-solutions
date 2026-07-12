function arraysEqual(array1, array2) {
  // Check if the array lengths are different.
  if (!(array1.length === array2.length)) {
    return false;
  }

  // Check every value in the array to the same index in the second.
  if (array1.every((value, index) => value === array2[index])) {
    return true;
  } else {
    return false;
  }
}

function whatIsInAName(array, source) {
  let arrayToReturn = new Array();

  // Check each object of the array given to us.
  array.forEach((object) => {
    // Check that every key value pair in the source object is included.
    if (Object.entries(source).every((sourcedPair) => {
      // Check if any of the key value pairs match.
      return Object.entries(object).some((objectPair) => {
        // Check if the key value matches the key value individually.
        return arraysEqual(objectPair, sourcedPair);
      });
    })) {
      // If it contains all key value pairs in source, then add it to the returnee array.
      arrayToReturn.push(object);
    };
  });

  // Return the filtered array.
  return arrayToReturn;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));