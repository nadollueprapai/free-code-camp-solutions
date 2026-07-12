let books = [
    {
        title: "The Dragonet Prophecy",
        authorName: "Tui T. Sutherland",
        releaseYear: 2012,
    },
    {
        title: "The Lightning Thief",
        authorName: "Rick Riordan",
        releaseYear: 2005,
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        authorName: "J.K. Rowling",
        releaseYear: 1997,
    },
];

const sortByYear = (bookOne, bookTwo) => {
    if (bookOne.releaseYear < bookTwo.releaseYear) {
        return -1;
    } else if (bookOne.releaseYear > bookTwo.releaseYear) {
        return 1;
    } else {
        return 0;
    };
};

// Filter out books from before the year 2000.
let filteredBooks = books.filter(book => book.releaseYear <= 2010);

// Sort the books by year using our callback function. (Credit to: mateomarraro & leontoys from the freeCodeCamp Forum)
filteredBooks.sort(sortByYear);

// Output the sorted books.
console.log(filteredBooks);