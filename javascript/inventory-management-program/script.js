// Create an empty inventory to start.
let inventory = [];

// This function returns the index in the inventory of a given product name.
function findProductIndex(productName) {
    // Iterate through inventory.
    for (let index = 0; index < inventory.length; index++) {
        // Index the product.
        let currentProductIndexed = inventory[index];

        // Check if the product indexed matches the given name.
        if (currentProductIndexed.name == productName.toLowerCase()) {
            // If it does then return the index.
            return index;
        }
    }
    // If the product is not in inventory then return -1.
    return -1;
}

function addProduct(product) {
    // Index the product using the findProductIndex function.
    let index = findProductIndex(product.name);
    // Check if already is in inventory.
    if (index != -1) {
        // If it is then add to its quantity.
        inventory[index].quantity += product.quantity;
        // Log a message.
        console.log(`${inventory[index].name} quantity updated`)
    } else {
        // Otherwise, add the product.
        inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });
        // Log a message.
        console.log(`${product.name.toLowerCase()} added to inventory`)
    }
}

function removeProduct(productName, subtractQuantity) {
    // Use the findProductIndex function.
    let index = findProductIndex(productName);

    // Check if the produt exists.
    if (index == -1) {
        console.log(`${productName.toLowerCase()} not found`);
        return
    }

    // Index the product.
    let productInInventory = inventory[index];
    // Check if there is enough to subtract.
    if ((productInInventory.quantity - subtractQuantity) < 0) {
        // If the number will be 0 after the subtraction, log a message.
        console.log(`Not enough ${productInInventory.name} available, remaining pieces: ${productInInventory.quantity}`);
    } else {
        // If there is enough to subtract then perform the subtraction.
        productInInventory.quantity -= subtractQuantity;
        // Log the message.
        console.log(`Remaining ${productInInventory.name} pieces: ${productInInventory.quantity}`)
    }

    // Check if the product has run out.
    if (productInInventory.quantity == 0) {
        // Remove it if it has.
        inventory.splice(index, index + 1);
    }
}

addProduct({ name: "Flour", quantity: 5 })
removeProduct("FLOUR", 5)
console.log(inventory)