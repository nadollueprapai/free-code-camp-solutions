function searchNode(graph, node, reachableNodes) {
    // Iterate through the reachable nodes of the node.
    for (let index = 0; index < node.length; index++) {
        // Retrieve the reachable boolean from the node.
        const isNodeReachable = node[index];

        // Check if the node is reachable and has not already been reached.
        if (isNodeReachable && !reachableNodes.includes(index)) {
            // Add the node to the list of reachable nodes.
            reachableNodes.push(index);

            // Search that node for unreached nodes.
            searchNode(graph, graph[index], reachableNodes)
        }
    }

    // Return the reachable nodes.
    return reachableNodes;
}

function dfs(graph, root) {
    /*
      The graph is array of nodes provided to us,
      whereas the root is the starting node.
  
      Our task is to determine the nodes reachable in
      the graph from our root node.
    */

    // Define an array to store reached nodes (with root to start).
    let reachableNodes = [root];

    // Index the starting node.
    const rootNode = graph[root];

    // Call the recursive function.
    searchNode(graph, rootNode, reachableNodes);

    // Return reachable nodes sorted.
    return reachableNodes.sort();
}


console.log(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 0)); // Output: [0, 1].