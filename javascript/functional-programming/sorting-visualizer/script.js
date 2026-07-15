function generateElement() {
    // Generate a number between 1 to 100 inclusive.
    return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
    // Create an empty array.
    let randomArray = new Array();

    // Generate 5 times.
    for (let i = 0; i < 5; i++) {
        // Add the generated element to the array.
        randomArray.push(generateElement());
    }

    // Return the populated array.
    return randomArray;
}

function generateContainer() {
    // Create and return a div element in the HTML document.
    return document.createElement("div");
}

function fillArrContainer(html, array) {
    // Iterate through each integer in the provided array.
    for (let arrayInteger of array) {
        // Create a span element.
        let spanElement = document.createElement("span");
        // Set the span element text to the integer.
        spanElement.innerHTML = arrayInteger;
        // Add the span element to the given html element.
        html.appendChild(spanElement);
    }
}

function isOrdered(first, second) {
    // Return a boolean indicating if the first element is less than or equal to the second element.
    return first <= second;
}

function swapElements(array, index) {
    // Check if the elements at the given index in the array are ordered.
    if (!isOrdered(array[index], array[index + 1])) {
        // If they are not ordered, then swap the two elements.
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        return "swapped";
    } else {
        return "skipped";
    }
}

function highlightCurrentEls(html, index) {
    // Set the border of the HTML child element at the given index to be dashed, 10px thick and red.
    html.children[index].style.borderStyle = "dashed";
    html.children[index].style.borderWidth = "10px";
    html.children[index].style.borderColor = "red";

    // Same for the following index.
    html.children[index + 1].style.borderStyle = "dashed";
    html.children[index + 1].style.borderWidth = "10px";
    html.children[index + 1].style.borderColor = "red";
}

// Use querySelector
const arrayContainerEl = document.querySelector("#array-container");
const startingArrayEl = document.querySelector("#starting-array")
const generateBtnEl = document.querySelector("#generate-btn");
const sortBtnEl = document.querySelector("#sort-btn");

// Add a click event listener into the generate button.
generateBtnEl.addEventListener(
    "click",
    () => {
        // Clear the starting array.
        startingArrayEl.replaceChildren();
        const children = arrayContainerEl.children;
        // Clear the array container element of previous visualizations, if any.
        while (children.length > 1) {
            for (let arrayEl of arrayContainerEl.children) {
                if (arrayEl.id == "starting-array") { continue }
                arrayContainerEl.removeChild(arrayEl);
            }
        }

        // Use fillArrContainer() to populate the starting array element.
        fillArrContainer(startingArrayEl, generateArray());

        // Make the sortBtn visible.
        sortBtnEl.style.display = "block";
    }
);

sortBtnEl.addEventListener(
    "click",
    () => {
        // Check if starting array is empty.
        if (!startingArrayEl.children.length) {
            return;
        }

        // Retrieve the array from startingArrayEl.
        // First, define the array that we need to sort using an empty array.
        let arrayToSort = new Array();
        // Iterate through the span elements within the starting array.
        for (let spanEl of startingArrayEl.children) {
            // Add the numerized version of the text of the span element into the array to sort.
            arrayToSort.push(Number(spanEl.innerText));
        }

        highlightCurrentEls(startingArrayEl, 0);
        swapElements(arrayToSort, 0);

        // Implement the Bubble Sort algorithm to sort the array.

        // The outer loop iterates the length of the array.
        for (let i = 0; i < arrayToSort.length; i++) {
            /*
              The inner loop iterates through the length of the array.
            */

            // To ensure optimization, let's track if a swap was necessary in the first place.
            let wasASwapNeeded = false;

            for (let j = 0; j < arrayToSort.length - 1; j++) {
                if (i == 0 && j == 0) { continue }
                // We should also create a "div" visualization showing the step.
                let visualizationEl = generateContainer();

                // Populate this div with the current array.
                fillArrContainer(visualizationEl, arrayToSort);

                // Highlight the elements inspected using highlightCurrentEls().
                highlightCurrentEls(visualizationEl, j);

                // Add the highlighted visualization to the array container.
                arrayContainerEl.appendChild(visualizationEl);

                // Run the function to swap the elements at the index.
                const actionTaken = swapElements(arrayToSort, j);

                if (actionTaken == "swapped") {
                    // In the case that we swapped the elements, we should set the swap needed to true.
                    wasASwapNeeded = true;
                }
                else if (actionTaken == "skipped") {
                    // We don't need to do anything in this case.
                }
            }

            // Check if we didn't need any swaps (correct order).
            if (!wasASwapNeeded) {
                // If so, we are done with sorting.
                break;
            }
        }

        // Add the ending state of the array as a visualization.
        let endVisualizationEl = generateContainer();
        endVisualizationEl.id = "sorted-array";

        // Populate this div with the current array.
        fillArrContainer(endVisualizationEl, arrayToSort);

        // Add the visualization to the array container element.
        arrayContainerEl.appendChild(endVisualizationEl);

        // Hide the sort button.
        sortBtnEl.style.display = "none";
    }
);