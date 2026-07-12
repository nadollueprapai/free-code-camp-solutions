const pantry = [
    { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
    { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
    "A10|Tomatoes|5|2027-01-01",
    "B21|Bananas|10|2027-01-01",
    "C32|Eggs|3|2027-01-01|fridge",
    "C32|Eggs|3|2027-01-01",
    "D43|Pineapples|0|2027-01-01",
    "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
    // Create an array to add to and return.
    let arrayOfItems = new Array();

    // Store encountered sku values.
    let encounteredStockKeepingValues = new Array();
    // Iterate through the raw data.
    for (let item of rawData) {
        // Split the data.
        let splitData = item.split("|")

        // Check for duplicate sku values.
        if (encounteredStockKeepingValues.includes(splitData[0])) {
            continue
        }

        // Add the sku value to the list.
        encounteredStockKeepingValues.push(splitData[0]);

        // Determine the zone, default to "general".
        let zoneDeterminer = "general";
        if (splitData[4]) {
            zoneDeterminer = splitData[4]
        }

        // Prepare the item.
        let itemToAdd = new Object({
            sku: splitData[0],
            name: splitData[1],
            qty: Number(splitData[2]),
            expires: splitData[3],
            zone: zoneDeterminer
        })

        // Add the item.
        arrayOfItems.push(itemToAdd);
    }

    // Return the array.
    return arrayOfItems;
}

function planRestock(pantry, shipment) {
    // Create an array to add to and return.
    let arrayOfActions = new Array();

    // Map the sku values in the pantry.
    let pantryStockKeepingValues = pantry.map(item => item.sku);

    // Iterate through the items of the shipment.
    for (let itemInShipment of shipment) {
        // Determine the action by comparing the shipment items to the pantry items.
        if (itemInShipment["qty"] <= 0) {
            // Create an action object and add it to the array.
            arrayOfActions.push({ type: "discard", item: itemInShipment });
        } else if (pantryStockKeepingValues.includes(itemInShipment["sku"])) {
            arrayOfActions.push({ type: "restock", item: itemInShipment });
        } else {
            arrayOfActions.push({ type: "donate", item: itemInShipment });
        }
    }

    // Return the array.
    return arrayOfActions;
}

function groupByZone(actions) {
    // Create a new array to add to and return.
    let arrayOfGroupedActions = new Object()

    // Iterate through the actions.
    for (let action of actions) {
        // Determine the zone of that action.
        let actionZone = action["item"]["zone"]

        // Check if the array already has that actions's zone.
        if (Object.hasOwn(arrayOfGroupedActions, actionZone)) {
            // If yes, add it.
            arrayOfGroupedActions[actionZone].push(action);
        } else {
            // If not, create the zone, then add it.
            arrayOfGroupedActions[actionZone] = new Array();
            arrayOfGroupedActions[actionZone].push(action);
        }
    }

    // Return the array.
    return arrayOfGroupedActions;
}

function clonePantry(pantry) {
    // Create an array to add to and return.
    let clonedPantryArray = new Array();

    // Iterate through the pantry items.
    for (let item of pantry) {
        // Deep copy the item objects.
        clonedPantryArray.push({
            sku: item["sku"], name: item["name"], qty: item["qty"], expires: item["expires"], zone: item["zone"]
        });
    }

    // Return the cloned pantry array.
    return clonedPantryArray;
}

// Call the functions.
let shipment = parseShipment(rawData);
let restockActions = planRestock(pantry, shipment);
let groupedActions = groupByZone(restockActions);

// Log the result.
console.log(groupedActions);