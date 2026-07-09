function destroyer(array, ...args) {
    // Define an array to add to and return.
    let arrayToReturn = new Array();

    // Iterate through each element of the array given to us.
    array.forEach((element) => {
        // Check if the element is contained within the arguments passed.
        if (!args.some((argument) => {
            return argument == element;
        })) {
            // If not, add the element to the returnee array.
            arrayToReturn.push(element);
        }
    });

    // Return the array of elements not present in the arguments passed.
    return arrayToReturn;
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));