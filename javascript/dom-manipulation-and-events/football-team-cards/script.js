// Create a football team object.
let footballTeam = {
    team: "myTeam1",
    year: 2026,
    headCoach: "John Smith",
    players: [
        {
            name: "John Doe",
            position: "forward",
            isCaptain: true,
        },
        {
            name: "Jake Williams",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "Jack Brown",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Jim Garcia",
            position: "goalkeeper",
            isCaptain: false,
        },
    ],
};

// Select the elements.
const teamStatsElement = document.querySelector(".team-stats");
const teamNameElement = teamStatsElement.querySelector("#team");
const teamYearElement = teamStatsElement.querySelector("#year");
const teamHeadCoachElement = teamStatsElement.querySelector("#head-coach");

// Set the elements text accordingly.
teamNameElement.innerHTML = footballTeam["team"];
teamYearElement.innerHTML = footballTeam["year"];
teamHeadCoachElement.innerHTML = footballTeam["headCoach"];

// Select the player cards container element.
const playerCardsDiv = document.querySelector("#player-cards");

function addPlayerCards(position) {
    // Iterate through the players array.
    footballTeam["players"].forEach((player) => {
        // Check if the player doesn't match the position and its not all players.
        if ((player["position"] != position) && (position != "all")) {
            return;
        }

        // Create a player card div element.
        const playerCard = document.createElement("div");
        // Add the necessary class.
        playerCard.classList.add("player-card");

        // Customize the player card.
        const nameElement = document.createElement("h2");
        nameElement.innerHTML = player["name"];

        if (player["isCaptain"]) {
            nameElement.innerHTML = "(Captain) " + player["name"];
        }

        playerCard.appendChild(nameElement);

        const positionElement = document.createElement("p");
        positionElement.classList.add("position")
        positionElement.innerHTML = `Position: ${player["position"]}`;
        playerCard.appendChild(positionElement);

        // Add the finished card to the div.
        playerCardsDiv.appendChild(playerCard);
    })
}

// Select our dropdown box.
const dropdown = document.querySelector("#players");

// Add an event listener to our dropdown box.
dropdown.addEventListener("change", (event) => {
    // Get the position to display from the input box.
    let position_to_display = event.target.value;

    // Clear the player cards container element.
    playerCardsDiv.replaceChildren();

    // Add the necessary player cards.
    addPlayerCards(position_to_display);
})

// Populate the player cards container element.
addPlayerCards("all");