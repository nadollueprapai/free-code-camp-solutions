function adjacencyListToMatrix(adjacencyList) {
    // Define an empty array to represent the adjacency matrix.
    let adjacencyMatrix = new Array();

    // Iterate through the node keys for each node in the adjacency list.
    for (let nodeKey of Object.keys(adjacencyList)) {
        // Access the node within the adjacency list.
        let connectedNodes = adjacencyList[nodeKey];

        // Initialize a row of the adjacency matrix with zeroes.
        let matrixRow = new Array(Object.keys(adjacencyList).length).fill(0);

        // Iterate through each of the connected nodes.
        for (let connectedNode of connectedNodes) {
            matrixRow[connectedNode] = 1;
        }

        // Add the matrix row to the adjacency matrix.
        adjacencyMatrix.push(matrixRow);
    }

    // Return the adjacency matrix.
    return adjacencyMatrix;
}

console.log(adjacencyListToMatrix({ 0: [1, 2], 1: [2], 2: [0, 3], 3: [2] }));