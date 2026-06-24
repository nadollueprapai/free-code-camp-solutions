let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(...args) {
    // Index the arguments.
    let name = args[0];
    let property = args[1];

    // Find the contact
    let contact = contacts.find(element => element.firstName == name);

    // Check if the contact exists.
    if (!contact) {
        return "No such contact";
    }

    // Find the property associated with that contact.
    let contactProperty = contact[property];

    // Check if the property associated exists.
    if (!contactProperty) {
        return "No such property";
    }

    // Return the contact.
    return contact[property];
}

console.log(lookUpProfile("Kristian", "lastName"))