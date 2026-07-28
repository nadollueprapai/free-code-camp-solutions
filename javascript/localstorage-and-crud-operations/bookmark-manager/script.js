// Select the section elements in the document.
const mainSectionEl = document.querySelector("#main-section");
const formSectionEl = document.querySelector("#form-section");
const bookmarkListSectionEl = document.querySelector("#bookmark-list-section");

// Select the category name class elements.
const categoryNameEls = document.querySelectorAll(".category-name");

// Select the elements in the main section.
const categoryDropdownEl = mainSectionEl.querySelector("#category-dropdown");
const openFormBtn = mainSectionEl.querySelector("#add-bookmark-button");
const viewCategoryBtn = mainSectionEl.querySelector("#view-category-button");

// Select the elements in the form section.
const nameInputEl = formSectionEl.querySelector("#name");
const urlInputEl = formSectionEl.querySelector("#url");
const addBookmarkBtn = formSectionEl.querySelector("#add-bookmark-button-form");
const closeFormBtn = formSectionEl.querySelector("#close-form-button");

// Select the elements in the bookmark list section.
const categoryList = bookmarkListSectionEl.querySelector("#category-list")
const closeListBtn = bookmarkListSectionEl.querySelector("#close-list-button");
const deleteBookmarkBtn = bookmarkListSectionEl.querySelector("#delete-bookmark-button");

// Set a storage key to store bookmark data in local browser storage.
const storageKey = "bookmarks"

/* Main functionality starts here... */

// Retrieve data from local storage.
function getBookmarks() {
    // Access local storage data using the provided key.
    const getStorageJson = localStorage.getItem(storageKey);

    // Code below originated from fCC forum.
    if (!getStorageJson || !getStorageJson.trim().startsWith('[')) {
        return [];
    }

    let parsedJsonData = JSON.parse(getStorageJson);

    // Return an empty array if the data is invalid.
    if (!parsedJsonData) {
        console.log("Inexistent data.");
        return [];
    }

    if (!Array.isArray(parsedJsonData)) {
        console.log("Non-array data.");
        return [];
    }

    // Test the objects of the array for valid data.
    let validData = true;
    parsedJsonData.forEach((testObject) => {
        if (typeof testObject !== "object") {
            validData = false;
        }

        if (Object.keys(testObject).length != 3) {
            validData = false;
        }

        if (Object.keys(testObject)[0] != "name") {
            validData = false;
        } else if (Object.keys(testObject)[1] != "category") {
            validData = false;
        } else if (Object.keys(testObject)[2] != "url") {
            validData = false;
        }
    });

    // Check if the data was valid.
    if (!validData) {
        console.log("Invalid Data");
        // If not, return an empty array.
        return [];
    }

    // Return the data.
    return parsedJsonData;
}

let bookmarks = getBookmarks();

console.log(bookmarks)

function displayOrCloseForm() {
    // Update the category text to match the selected category.
    const capitalizedCategory = categoryDropdownEl.value.charAt(0).toUpperCase() + categoryDropdownEl.value.slice(1);
    categoryNameEls.forEach(
        (element) => { element.innerText = capitalizedCategory }
    );

    // Reset the name and url input fields.
    nameInputEl.value = "";
    urlInputEl.value = "";

    // Toggle the visibility of the main section and form section elements.
    mainSectionEl.classList.toggle("hidden");
    formSectionEl.classList.toggle("hidden");
}

function displayOrHideCategory() {
    // Update the category text to match the selected category.
    const capitalizedCategory = categoryDropdownEl.value.charAt(0).toUpperCase() + categoryDropdownEl.value.slice(1);
    categoryNameEls.forEach(
        (element) => { element.innerText = capitalizedCategory }
    );

    // Toggle the visibility of the main section and bookmark list section elements.
    mainSectionEl.classList.toggle("hidden");
    bookmarkListSectionEl.classList.toggle("hidden");
}

function addBookmark() {
    // Create a new bookmark object.
    const newBookmarkObj = {
        name: nameInputEl.value,
        category: categoryDropdownEl.value,
        url: urlInputEl.value,
    }

    // Add the new bookmark to the array of bookmarks.
    bookmarks = getBookmarks();
    bookmarks.push(newBookmarkObj);

    // Save the array of bookmarks to local storage.
    localStorage.setItem(storageKey, JSON.stringify(bookmarks))

    // Reload the bookmarks array.
    bookmarks = getBookmarks()

    // Close the form now that we have added a bookmark.
    displayOrCloseForm();
}

function displayBookmarks() {
    // Clear the existing list of HTML.
    categoryList.innerHTML = ``;

    // Reload bookmarks.
    bookmarks = getBookmarks();

    // Iterate through each bookmark.
    bookmarks.forEach(
        (bookmark) => {
            // Skip elements that are not part of the category.
            if (bookmark.category != categoryDropdownEl.value) { return }

            /* 
              Add a radio input button with id and value corresponding to the bookmark.
              Also add a linked name inside a label corresponding to the radio button.
              Lastly, wrap the entire list element in a div.
            */
            categoryList.innerHTML += `
            <div>
            <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="${bookmark.category}">
            <label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>
            </div>`;
        }
    )

    // Check if the category list element is empty, meaning there are no bookmarks in this category.
    if (!categoryList.innerHTML) {
        // Set the category list to reflect the situation.
        categoryList.innerHTML += "<p>No Bookmarks Found</p>"
    }
}

function deleteSelectedBookmark() {
    // First determine the bookmark that we are going to delete.
    const selectedRadio = categoryList.querySelector(`input[name=${categoryDropdownEl.value}]:checked`);

    // Determine the index at which the selected bookmark is using findIndex to match id and category.
    const selectedBookmarkArrayIndex = bookmarks.findIndex((bookmark) => bookmark.name === selectedRadio.id && bookmark.category === categoryDropdownEl.value);

    // Remove the item from the bookmarks array.
    bookmarks.splice(selectedBookmarkArrayIndex, 1);

    // Update local storage to remove the selected item.
    localStorage.setItem(storageKey, JSON.stringify(bookmarks));

    bookmarks = getBookmarks();

    // Call the function to update the display.
    displayBookmarks();
}

// Add event listeners to the buttons with their respective functionality.
openFormBtn.addEventListener(
    "click",
    () => {
        displayOrCloseForm();
    }
);

closeFormBtn.addEventListener(
    "click",
    () => {
        displayOrCloseForm();
    }
);

addBookmarkBtn.addEventListener(
    "click",
    () => {
        addBookmark();
    }
);

viewCategoryBtn.addEventListener(
    "click",
    () => {
        // Show the category list section.
        displayOrHideCategory();

        // Update the display of bookmarks.
        displayBookmarks();
    }
);

closeListBtn.addEventListener(
    "click",
    () => {
        // Swap back to the main section.
        displayOrHideCategory();
    }
);

deleteBookmarkBtn.addEventListener(
    "click",
    () => {
        deleteSelectedBookmark();
    }
)