const projectStatus = {
    PENDING: {
        description: "Pending Execution",
    },
    SUCCESS: {
        description: "Executed Successfully",
    },
    FAILURE: {
        description: "Execution Failed",
    },
}

class ProjectIdea {
    constructor(title, description) {
        // Set title and description.
        this.title = title;
        this.description = description;

        // Set default status to pending.
        this.status = projectStatus.PENDING;
    }

    updateProjectStatus(newStatus) {
        // Change the status.
        this.status = newStatus;
    }
}

class ProjectIdeaBoard {
    constructor(title) {
        // Set the title of the board.
        this.title = title;

        // Initialize a board with an empty array of ideas.
        this.ideas = [];
    }

    pin(ProjectIdea) {
        // Add the idea to the array of ideas.
        this.ideas.push(ProjectIdea);
    }

    unpin(ProjectIdea) {
        // Find the index of the matching idea in the ideas array.
        const projectIdeaIndex = this.ideas.findIndex((idea) => idea == ProjectIdea);

        // Delete one item from the ideas array at the found index.
        this.ideas.splice(projectIdeaIndex, 1);
    }

    count() {
        // Return the number of ideas in the board.
        return this.ideas.length;
    }

    formatToString() {
        // Define an empty string to format and return.
        let formattedString = "";
        formattedString += `${this.title} has ${this.count()} idea(s)\n`

        // Iterate through each of the project ideas.
        for (let idea of this.ideas) {
            formattedString += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
        }

        // Return the formatted string.
        return formattedString;
    }
}

const exampleProjectIdea = new ProjectIdea("Smart Window Locks", "An automation project allowing users to lock, unlock windows automatically based on weather conditions.");
exampleProjectIdea.updateProjectStatus(projectStatus.SUCCESS)

console.log(exampleProjectIdea);

const exampleProjectBoard = new ProjectIdeaBoard("Example Board");

exampleProjectBoard.pin(exampleProjectIdea);
console.log(exampleProjectBoard.count());

console.log(exampleProjectBoard.formatToString());

exampleProjectBoard.unpin(exampleProjectIdea);
console.log(exampleProjectBoard.count());

console.log(exampleProjectBoard.formatToString());