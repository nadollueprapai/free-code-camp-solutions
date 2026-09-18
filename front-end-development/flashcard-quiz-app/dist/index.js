"use strict";
let currentCards = [
    { questionText: "What is 1 + 1?", questionAnswer: "2" },
    { questionText: "What year was the declaration of independence signed?", questionAnswer: "1776" },
    { questionText: "What is 2 + 2?", questionAnswer: "4." },
    { questionText: "Who wrote Harry Potter?", questionAnswer: "J.K. Rowling" },
];
class InvalidUserInputError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidUserInputError";
    }
}
let selectedCardIndex = 0;
const flashcard = document.querySelector("#flashcard");
const deleteButton = document.querySelector("#delete-btn");
const cardsDisplay = document.querySelector("#cards-display");
const entryForm = document.querySelector("#entry-form");
const formFrontText = document.querySelector("#front-text");
const formBackText = document.querySelector("#back-text");
const addCardButton = document.querySelector("#add-card-button");
const renderFlashcard = (selectedFlashcard) => {
    if (currentCards.length === 0 || !selectedFlashcard) {
        flashcard.innerHTML = `<div>No flashcards.</div>`;
        return;
    }
    if (!flashcard.classList.contains("flipped")) {
        // Not flipped.
        flashcard.innerHTML = `<div id="card-inner">
        <div id="card-front">${selectedFlashcard.questionText}</div>
      </div>`;
    }
    else {
        // Flipped.
        flashcard.innerHTML = `<div id="card-inner">
        <div id="card-back">${selectedFlashcard.questionAnswer}</div>
      </div>`;
    }
};
const renderDisplayCards = () => {
    // Set cards display to an empty HTML container.
    cardsDisplay.innerHTML = "";
    // Handle no cards.
    if (currentCards.length === 0) {
        renderFlashcard(currentCards[selectedCardIndex]);
        cardsDisplay.innerHTML = "No cards.";
        return;
    }
    // Render the current card.
    renderFlashcard(currentCards[selectedCardIndex]);
    // Add cards.
    currentCards.forEach((card, index) => {
        const selectedClassAddon = (index == selectedCardIndex) ? "selected" : "";
        cardsDisplay.innerHTML += `<div class="displayedCard ${selectedClassAddon}" index=${index}>${card.questionText}</div>`;
    });
};
deleteButton.addEventListener("click", () => {
    if (currentCards.length === 0) {
        return;
    }
    // Splice 1 card from the selectedCardIndex position.
    currentCards.splice(selectedCardIndex, 1);
    if (currentCards.length === 0) {
        selectedCardIndex = 0;
    }
    else {
        selectedCardIndex = Math.max(0, selectedCardIndex - 1);
    }
    flashcard.classList.remove("flipped");
    renderDisplayCards();
});
flashcard.addEventListener("click", () => {
    if (currentCards.length === 0) {
        return;
    }
    // Add the flipped class to the flashcard.
    flashcard.classList.toggle("flipped");
    // Render to update.
    renderFlashcard(currentCards[selectedCardIndex]);
});
cardsDisplay.addEventListener("click", (event) => {
    // Reference the clicked card from the display.
    const target = event.target;
    const card = target.closest(".displayedCard");
    // Determine if a card was clicked.
    if (!card) {
        return;
    }
    const indexAttribute = card.getAttribute("index");
    if (indexAttribute) {
        // Set the currently selected card to the newly clicked card.
        selectedCardIndex = parseInt(indexAttribute, 10);
    }
    // Unflip the flashcard.
    flashcard.classList.remove("flipped");
    // Call the display cards render function to update selected card and flashcard.
    renderDisplayCards();
});
entryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Handle empty textareas.
    if (formFrontText.value.trim().length === 0 || formBackText.value.trim().length === 0) {
        // Throw an error.
        throw new InvalidUserInputError("Both fields are required.");
        return;
    }
    const question = formFrontText.value;
    const answer = formBackText.value;
    // Add a new card to the currentCards.
    currentCards.push({ questionText: question, questionAnswer: answer });
    selectedCardIndex = currentCards.length - 1;
    // Clear the textareas.
    formFrontText.value = "";
    formBackText.value = "";
    flashcard.classList.remove("flipped");
    // Render time.
    renderDisplayCards();
});
renderDisplayCards();
