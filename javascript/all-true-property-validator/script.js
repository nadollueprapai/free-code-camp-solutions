function truthCheck(collection, property) {
    // Check if every object in the collection has a truthy value for the given property.
    return collection.every((object) => object[property]);
}

console.log(truthCheck(
    [
        { name: "Quincy", role: "Founder", isBot: false },
        { name: "Naomi", role: "", isBot: false },
        { name: "Camperbot", role: "Bot", isBot: true }
    ],
    "name"));