const currentDate = new Date(Date.now());

let currentDateFormat = `Current Date and Time: ${currentDate}`

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
    const convertedDate = new Intl.DateTimeFormat("en-US").format(date);
    return `Formatted Date (MM/DD/YYYY): ${convertedDate}`
}

console.log(formatDateMMDDYYYY(currentDate))

function formatDateLong(date) {
    const convertedDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date)
    return `Formatted Date (Month Day, Year): ${convertedDate}`
}

console.log(formatDateLong(currentDate))