const themes = [
    {
        name: "light",
        message: "You have switched to light theme!",
    },
    {
        name: "dark",
        message: "You have switched to dark theme...",
    },
]

// Select the theme switcher button.
const themeSwitcherButton = document.querySelector("#theme-switcher-button");

// Select the theme switcher dropdown divider.
const themeSwitcherDropdown = document.querySelector("#theme-dropdown");

// Make the dropdown appear when the button is clicked.
themeSwitcherButton.addEventListener("click", () => {

    if (themeSwitcherDropdown.hasAttribute("hidden")) {
        themeSwitcherDropdown.removeAttribute("hidden");
        themeSwitcherButton.setAttribute("aria-expanded", "true")
    } else {
        themeSwitcherDropdown.setAttribute("hidden", "");
        themeSwitcherButton.setAttribute("aria-expanded", "false")
    }
})

// Select all the menu items (theme option buttons).
const themeMenuItems = themeSwitcherDropdown.querySelectorAll('[role="menuitem"]')

// Iterate through each of the menu items (theme option buttons).
themeMenuItems.forEach((menuItem) => {
    // Add a click event to each.
    menuItem.addEventListener("click", () => {
        // The click event should set the theme.
        const themeName = menuItem.id.replace("theme-", "");

        // Find the theme object in the themes array.
        let themeObject = themes.find(theme => theme.name == themeName);

        // Reference the theme message to be displayed.
        let themeMessage = themeObject.message;

        // Clear all the classes in body that have the "theme-" prefix.
        [...document.querySelector("body").classList].forEach(className => {
            if (className.startsWith("theme-")) {
                document.querySelector("body").classList.remove(className);
            }
        })

        // Add in the new theme class.
        document.querySelector("body").classList.add(`theme-${themeName}`);

        // Display the theme's message in the aria-live "polite" element.
        document.querySelector('[aria-live="polite"]').innerHTML = themeMessage;
    })
})