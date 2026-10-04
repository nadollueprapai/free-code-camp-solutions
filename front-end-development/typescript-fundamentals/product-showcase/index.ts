interface Item {
    type: "book" | "electronics" | "clothing";
    id: string;
    price: number;
}

interface Book extends Item {
    type: "book";
    title: string;
    author: string;
}

interface Electronics extends Item {
    type: "electronics";
    item: string;
    model: string;
    warranty?: number;
}

interface Clothing extends Item {
    type: "clothing";
    item: string;
    brand: string;
    size?: "S" | "M" | "L"
}

type Product = Book | Electronics | Clothing;

class Collection<T> {
    items: T[];
    constructor(value: T[]) {
        this.items = value;
    }

    getAll() {
        return this.items;
    }

    filter(callback: (item: T) => boolean) {
        return this.items.filter(item => callback(item));
    }
}

function renderProduct(product: Product) {
    let itemHTML = `<div class="item" id="${product.id}">`;
    let priceHTML = `<div class="price">${product.price}</div>`;
    let infoHTML = "";
    if (product.type == "book") {
        infoHTML = `<div>Book: ${product.title} by ${product.author}`;
    } else if (product.type == "electronics") {
        infoHTML = `<div>Electronics: ${product.item} - ${product.model}`;
        if (product.warranty) {
            infoHTML += ` - Warranty: ${product.warranty} year(s)`;
        }
    } else if (product.type == "clothing") {
        infoHTML = `<div>Clothing: ${product.item} by ${product.brand}`;
        if (product.size) {
            infoHTML += ` - Size ${product.size}`;
        }
    } else {
        throw new Error(`Unknown product type: ${JSON.stringify(product)}`)
    }
    infoHTML += `</div>`;
    itemHTML += infoHTML;
    itemHTML += priceHTML;
    itemHTML += `</div>`;
    return itemHTML;
}

let harryPotter: Book = {
    type: "book",
    id: "100",
    price: 15,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
};

let smartphone: Electronics = {
    type: "electronics",
    id: "101",
    price: 300,
    item: "phone",
    model: "pear",
    warranty: 5
};

let tShirt: Clothing = {
    type: "clothing",
    id: "102",
    price: 15,
    item: "tShirt",
    brand: "UNI",
    size: "S",
};

let products = new Collection<Product>([harryPotter, smartphone, tShirt]);

function showProducts(optionalType?: string) {
    let outputElement = document.querySelector<HTMLElement>("#output");

    if (!outputElement) {
        return
    }

    let productsToRender = optionalType ? products.filter((item) => item.type == optionalType) : products.getAll()

    outputElement.innerHTML = "";
    productsToRender.forEach(
        (p) => {
            outputElement.innerHTML += renderProduct(p);
        }
    )
}

let allButton = document.querySelector<HTMLElement>("#all");
let booksButton = document.querySelector<HTMLElement>("#books");
let electronicsButton = document.querySelector<HTMLElement>("#electronics");
let clothingButton = document.querySelector<HTMLElement>("#clothing");

allButton?.addEventListener("click", (event) => {
    showProducts();
})
booksButton?.addEventListener("click", (event) => {
    showProducts("book");
})
electronicsButton?.addEventListener("click", (event) => {
    showProducts("electronics");
})
clothingButton?.addEventListener("click", (event) => {
    showProducts("clothing");
})

document.addEventListener("DOMContentLoaded", () => {
    showProducts();
})