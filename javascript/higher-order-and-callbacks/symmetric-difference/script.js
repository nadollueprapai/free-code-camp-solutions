function diffArray(arrayOne, arrayTwo) {
    // Keep only elements that are not included within the second array.
    let arrayOneUniqueElements = arrayOne.filter((element) => {
        return !arrayTwo.includes(element);
    });

    // Keep only elements that are not included within the first array, so it's vice versa.
    let arrayTwoUniqueElements = arrayTwo.filter((element) => {
        return !arrayOne.includes(element);
    })

    // Return an array of the unique elements, present only in one of the two arrays.
    return [...arrayOneUniqueElements, ...arrayTwoUniqueElements];
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));