class Collection {
    constructor(value) {
        this.items = value;
    }

    getAll() {
        return this.items;
    }

    filter(callback) {
        return this.items.filter(item => callback(item));
    }
}

function renderProduct(product) {
    let itemHTML = `<div class="item" id="${product.id}">`;
    let priceHTML = `<div class="price">$${product.price}</div>`;
    let infoHTML = "";

    if (product.type === "book") {
        infoHTML = `
            <div>
                Book: ${product.title} by ${product.author}
            </div>
        `;
    } 
    
    else if (product.type === "electronics") {
        infoHTML = `
            <div>
                Electronics: ${product.item} - ${product.model}
        `;

        if (product.warranty) {
            infoHTML += `
                - Warranty: ${product.warranty} year(s)
            `;
        }

        infoHTML += `</div>`;
    } 
    
    else if (product.type === "clothing") {
        infoHTML = `
            <div>
                Clothing: ${product.item} by ${product.brand}
        `;

        if (product.size) {
            infoHTML += ` - Size ${product.size}`;
        }

        infoHTML += `</div>`;
    } 
    
    else {
        throw new Error(
            `Unknown product type: ${JSON.stringify(product)}`
        );
    }

    itemHTML += infoHTML;
    itemHTML += priceHTML;
    itemHTML += `</div>`;

    return itemHTML;
}


// Products

let harryPotter = {
    type: "book",
    id: "100",
    price: 15,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
};

let smartphone = {
    type: "electronics",
    id: "101",
    price: 300,
    item: "phone",
    model: "pear",
    warranty: 5
};

let tShirt = {
    type: "clothing",
    id: "102",
    price: 15,
    item: "tShirt",
    brand: "UNI",
    size: "S"
};


let products = new Collection([
    harryPotter,
    smartphone,
    tShirt
]);


// Display products

function showProducts(optionalType) {
    let outputElement = document.querySelector("#output");

    if (!outputElement) {
        return;
    }

    let productsToRender = optionalType
        ? products.filter(item => item.type === optionalType)
        : products.getAll();

    outputElement.innerHTML = "";

    productsToRender.forEach(product => {
        outputElement.innerHTML += renderProduct(product);
    });
}


// Buttons

let allButton = document.querySelector("#all");
let booksButton = document.querySelector("#books");
let electronicsButton = document.querySelector("#electronics");
let clothingButton = document.querySelector("#clothing");


allButton?.addEventListener("click", () => {
    showProducts();
});

booksButton?.addEventListener("click", () => {
    showProducts("book");
});

electronicsButton?.addEventListener("click", () => {
    showProducts("electronics");
});

clothingButton?.addEventListener("click", () => {
    showProducts("clothing");
});


// Initial display

document.addEventListener("DOMContentLoaded", () => {
    showProducts();
});