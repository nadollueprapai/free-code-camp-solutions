function initStack() {
    return {
        collection: []
    }
}

function push(stack, element) {
    stack.collection.push(element);
}

function pop(stack) {
    return stack.collection.pop();
}

function peek(stack) {
    return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack) {
    return (stack.collection.length === 0);
}

function clear(stack) {
    stack.collection = [];
}

const myStack = initStack();
push(myStack, 5);
console.log(pop(myStack));
push(myStack, 820);
push(myStack, 9);
console.log(peek(myStack));
console.log(isEmpty(myStack))
