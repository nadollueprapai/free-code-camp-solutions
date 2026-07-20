let poll = new Map();

function addOption(option) {
    // Check if the option is already present in the poll's list of options.
    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }

    // Check if the option is empty or falsy.
    if (!option) {
        return `Option cannot be empty.`;
    }

    // Create the option in the poll Map.
    poll.set(option, new Set([]));

    return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
    // Check if the option exists.
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }

    // Check if this person has already voted for an option by iterating through the poll options.
    for (const [inspectedOption, inspectedOptionSet] of poll) {
        // Check if their voterId matches any votes.
        if (inspectedOptionSet.has(voterId)) {
            // Return a message to prevent the voter from inserting multiple votes.
            return `Voter ${voterId} has already voted for "${inspectedOption}".`;
        }
    }

    // Add the voterId to the set of voters.
    poll.get(option).add(voterId);

    // Return a vote confirmation message.
    return `Voter ${voterId} voted for "${option}".`
}

function displayResults() {
    // Initialize the output variable with the title.
    let output = "Poll Results:"

    // Iterate through the poll's options and respective sets of voters.
    poll.forEach(
        (optionSet, option) => {
            // Add a new line.
            output += "\n";
            // Add the votes for this option.
            output += `${option}: ${optionSet.size} votes`;
        }
    )

    // Return the raw string output.
    return output;
}

// Test adding options.
console.log(addOption("Pizza"))
console.log(addOption("Korean"))
console.log(addOption("Chinese"))
console.log(addOption("Thai"))
console.log(addOption("Costco"))

// Test votes.
console.log(vote("Costco", "John"));
console.log(vote("Thai", "John"));
console.log(vote("Costco", "Jane"));
console.log(vote("Chinese", "Jack"));
console.log(vote("Korean", "Jill"));
console.log(vote("CostCo", "James"));

// Display the results.
console.log(displayResults());