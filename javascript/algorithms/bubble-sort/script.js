function bubbleSort(array) {
    // Continue iterating until the array is sorted. Keeping track of iterations can help optimize.
    for (let sortedCount = 0; sortedCount < array.length; sortedCount++) {
        let swapNeeded = false;

        /* 
            Iterate from the first to the second-to-last unsorted element of the array, which we can determine with sortedCount.
            The last elements would have already been sorted from previous iterations of the outer loop.
        */
        for (let i = 0; i < (array.length - sortedCount - 1); i++) {
            // Index the current and next element.
            const currentElement = array[i];
            const nextElement = array[i + 1];

            // Check if the next element is smaller than the current element.
            if (nextElement < currentElement) {
                // If so, set swapNeeded to true.
                swapNeeded = true;

                // Swap the elements in place, modifying the array variable.
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }

        // Check if the array is in order.
        if (!swapNeeded) {
            // If so, exit the sorting.
            break;
        }
    }

    // Return the sorted array.
    return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));