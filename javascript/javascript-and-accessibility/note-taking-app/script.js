const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

// Keep track of previous content to accurately update status text.
let previousContent = "";

// Define a storage keyword to access the local storage data.
const storageKey = "note";

// Define a function to save the note and show a confirmation message.
function saveNote() {
    // Save the note text to the storage key.
    localStorage.setItem(storageKey, noteEl.innerText);

    // Show a confirmation message.
    statusEl.textContent = "Note saved successfully!";
}

// Define a function to get the saved data.
function getSavedNote() {
    const savedNote = localStorage.getItem(storageKey);
    return savedNote?.trim() || "";
}

// Triggers when user starts editing the note.
noteEl.addEventListener("focus", () => {
    // Update the text of the status element.
    statusEl.textContent = "Editing note...";
})

noteEl.addEventListener("blur", () => {
    // Start by clearing the status text.
    statusEl.textContent = "";

    // Access the current content of the note.
    const currentContent = noteEl.innerText;

    // Check if the note hasn't changed by comparing currentContent with newContent.
    if (previousContent === currentContent) {
        // If it is the exact same, then avoid unnecessary saving.
        return;
    }

    // Update previous content to the current content of the note.
    previousContent = currentContent;

    // Save the note to local storage and display save confirmation message.
    saveNote();
});

window.addEventListener("DOMContentLoaded", () => {
    // Load in the note from localStorage.
    const savedNote = getSavedNote();

    // Check if the note is existent.
    if (savedNote) {
        // Load in the note.
        noteEl.textContent = savedNote;
        previousContent = savedNote;
    } else {
        // Set previousContent to default text.
        previousContent = noteEl.innerText;
    }
});