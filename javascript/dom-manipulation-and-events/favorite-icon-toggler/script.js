const favoriteIconButtons = document.querySelectorAll(".favorite-icon");

favoriteIconButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('filled')) {
            button.innerHTML = "&#10084;";
            button.classList.add('filled');
        } else {
            button.innerHTML = "&#9825;"
            button.classList.remove('filled');
        }
    });
});

const fillSelector = setInterval(() => {
    const filledElements = document.querySelectorAll(".filled")

    filledElements.forEach(element => {
        element.color = "Red";
    })
}, 1000);