function initList() {
    return {
        head: null,
        length: 0
    };
}

function isEmpty(list) {
    return list.length === 0;
}

function add(list, element) {
    const node = { element, next: null };

    if (isEmpty(list)) {
        list.head = node;
    } else {
        let current = list.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }

    list.length++;
}

function remove(list, element) {
    let previous = null;
    let current = list.head;

    while (current !== null && current.element !== element) {
        previous = current;
        current = current.next;
    }

    if (current === null) return;

    if (previous !== null) {
        previous.next = current.next;
    } else {
        list.head = current.next;
    }

    list.length--;
}

function contains(list, element) {
    // Check if the list is empty.
    if (!list.length) {
        return false;
    }

    // Start at the head node of the linked list.
    let current = list.head;

    // Traverse the linked list.
    while (current.next !== null) {
        if (current.element == element) {
            return true;
        }
        current = current.next;
    }

    // If we have reached the end without encountering the element, then we should return false.
    return false;
}

function getAt(list, index) {
    // Check if the index is out of range.
    if (index >= list.length || index < 0) {
        return undefined;
    }

    // Start at the list head.
    let current = list.head;

    // Traverse the list until we reach the index.
    for (let i = 0; i < index; i++) {
        current = current.next;
    }

    // Return the element of the current node.
    return current.element;
}

function insertAt(list, index, element) {
    // Check if the index is out of range.
    if (index > list.length || index < 0) {
        return;
    }

    // Start at the list head node.
    let current = list.head;

    // Traverse the list until we have the element before the index.
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }

    // Handle special case.
    if (index == 0) {
        // Create the node.
        const node = { element, next: current };

        // Set the node to the start of the list.
        list.head = node;

        // Increment the list's length.
        list.length++;

        return;
    }

    // Create a new node with given element and the element currently at the given index as the next element.
    const node = { element, next: current.next };

    // Set the node into place.
    current.next = node;

    // Increment the list's length.
    list.length++;

    return;
}

function removeAt(list, index) {
    // First, check if the index is out of bounds.
    if (index >= list.length || index < 0) {
        return;
    }

    // Start at the list head node.
    let current = list.head;

    // Traverse the list until we have the indexxed the element.
    for (let i = 0; i < index; i++) {
        current = current.next;
    }

    // Call the remove function on this node's element.
    remove(list, current.element);

    return;
}

function clear(list) {
    // Reset the list.
    list.head = null;
    list.length = 0;
}

let myList = initList();

add(myList, 1)
add(myList, "two")
add(myList, "tres")
add(myList, "tetra")
add(myList, "quint")

console.log(getAt(myList, 4))
insertAt(myList, 4, "insertedElement")
console.log(getAt(myList, 4))
console.log(getAt(myList, 5))
removeAt(myList, 4);
console.log(getAt(myList, 4))

insertAt(myList, 0, "firstElement")
console.log(getAt(myList, 0));

clear(myList);
console.log(myList)

console.log(getAt(myList, 0));