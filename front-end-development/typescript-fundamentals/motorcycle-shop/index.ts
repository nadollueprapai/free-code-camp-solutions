/* Credit to fCC forum for hints and ChatGPT for debugging.*/

let motorcycleGridElement = document.querySelector("#motorcycle-grid");
let resultsNumberElement = document.querySelector("#results-number");

type Category = 'Sport' | 'Cruiser' | 'Touring' | 'Dirt' | 'Adventure' | 'Naked' | 'Electric';

interface Motorcycle {
    id: string;
    name: string;
    manufacturer: string;
    category: Category;
    price: number;
    image_url: string;
    created_at: Date;
    description: string;
    year: number;
    [key: string]: any;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
    const response = await fetch("https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json");
    const data = await response.json();
    return data;
}

function renderMotorcycleCard(motorcycle: Motorcycle): string {
    let htmlString = `<div class="motorcycle-card">`;

    htmlString += `<div class="motorcycle-card-image-container"><img src="${motorcycle.image_url}"></img></div>`;
    htmlString += `<div class="motorcycle-card-year-badge"></div>`;
    htmlString += `<div class="motorcycle-card-title">${motorcycle.name}</div>`;
    htmlString += `<div class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</div>`
    htmlString += `<div class="motorcycle-card-category">${motorcycle.category}</div>`
    htmlString += `<div class="motorcycle-card-description">${motorcycle.description}</div>`
    htmlString += `<div class="motorcycle-card-price">${motorcycle.price}</div>`
    htmlString += `<div class="motorcycle-card-engine">${motorcycle.engine}</div>`
    htmlString += `</div>`

    return htmlString;
}

class MotorcycleGalleryApp {
    private allMotorcycles: Motorcycle[] = [];

    constructor() { }

    async renderMotorcycles(): Promise<void> {
        const data = await fetchMotorcycles();
        this.allMotorcycles = data || [];

        const loadCards = (motorcycles: Motorcycle[]) => {
            let motorcycleCount = 0;
            let htmlForGrid = "";

            if (motorcycleGridElement) {
                motorcycleGridElement.innerHTML = "";
            }

            this.allMotorcycles.forEach((motorcycle) => {
                htmlForGrid += renderMotorcycleCard(motorcycle);
                motorcycleCount++;
            })

            if (motorcycleGridElement) {
                motorcycleGridElement.innerHTML += htmlForGrid;
            }
            if (resultsNumberElement) {
                resultsNumberElement.innerHTML = "";
                resultsNumberElement.innerHTML += motorcycleCount;
            }
        }

        loadCards(data);

        let searchFilterInput = document.querySelector("#name-filter-input") as HTMLInputElement;
        if (searchFilterInput) {
            searchFilterInput.addEventListener("input", (event: Event) => {
                let searchTerm = searchFilterInput.value.toLowerCase();
                console.log(searchTerm)

                let filteredData = data.filter((motorcycle) =>
                    motorcycle.name.toLowerCase().includes(searchTerm) ||
                    motorcycle.manufacturer.toLowerCase().includes(searchTerm) ||
                    motorcycle.category.toLowerCase().includes(searchTerm)
                );
                loadCards(filteredData);
            })
        }
    }
}

function updateShop() {
    const gallery = new MotorcycleGalleryApp();
    gallery.renderMotorcycles();
}

updateShop()