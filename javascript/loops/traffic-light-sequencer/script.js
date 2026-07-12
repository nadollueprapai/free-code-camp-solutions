const config1 = {
    fault: false,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 4 }
    ]
};

const config2 = {
    fault: false,
    phases: [
        { color: "red", duration: 3 },
        { color: "yellow", duration: -2 },
        { color: "green", duration: 6 }
    ]
};

const config3 = {
    fault: true,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 6 }
    ]
};

const config4 = {
    fault: false,
    phases: []
};

function runSequence(config, cycles) {
    // Check if phases is empty.
    if (config["phases"].length == 0) {
        console.log("No phases found")
        return
        // Check if configuration is faulty.
    } else if (config["fault"] == true) {
        console.log("Faulted phase!")
        return
    }

    // Loop "cycles" amount of times.
    for (let cycle = 0; cycle < cycles; cycle++) {
        // Iterate through the phases.
        for (let phase of config["phases"]) {
            // Check if the duration of the phase is valid.
            if (phase["duration"] <= 0) {
                // Log the invalid phase.
                console.log("Invalid phase detected")
                // Skip to the next iteration.
                continue
            }

            // Log a valid phase switch.
            console.log(`Switching to ${phase["color"]} for ${phase["duration"]} s`)
        }
    }
}

function generateTimeline(config, cycles) {
    // Initialize timeline and time variables.
    let timeline = new Array();
    let time = 0;

    // Loop cycles amount of times.
    for (let cycle = 0; cycle < cycles; cycle++) {
        // Iterate through the phases.
        for (let phase of config["phases"]) {
            // Modify time by the duration, regardless of validity.
            time += phase["duration"];
            // Add the time to the timeline.
            timeline.push(time);
        }
    }

    // Return the timeline.
    return timeline;
}

