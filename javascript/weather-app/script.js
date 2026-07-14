// Select elements in the display card using querySelector.
const weatherDisplayCard = document.querySelector("#weather-display-card");
const weatherIconImg = weatherDisplayCard.querySelector("#weather-icon");
const mainTemperatureEl = weatherDisplayCard.querySelector("#main-temperature");
const feelsLikeEl = weatherDisplayCard.querySelector("#feels-like");
const humidityEl = weatherDisplayCard.querySelector("#humidity");
const windEl = weatherDisplayCard.querySelector("#wind");
const windGustEl = weatherDisplayCard.querySelector("#wind-gust");
const weatherMainEl = weatherDisplayCard.querySelector("#weather-main");
const locationEl = weatherDisplayCard.querySelector("#location");

async function getWeather(city) {
    // Use try to catch errors.
    try {
        // Construct the url.
        const url = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`;

        // Wait for the response.
        const response = await fetch(url);

        // Wait for the response to be converted into a json.
        const responseJSON = await response.json();

        // Check for an error in the response.
        if (responseJSON["error"]) {
            // Alert the user.
            alert("Something went wrong, please try again later");
        }

        // Return the JSON file.
        return responseJSON;
        // Catch potential errors.
    } catch (error) {
        // Log the error.
        console.log(error);
        // Alert the user.
        alert("Something went wrong, please try again later");
    }
}

async function showWeather(city) {
    const weatherData = await getWeather(city);

    // Check if weather data is missing.
    if (!weatherData) {
        // Exit if so.
        return;
    }

    // Set the weather image.
    weatherIconImg.src = weatherData["weather"][0]["icon"];

    // Update temperature text elements.
    mainTemperatureEl.textContent = weatherData["main"]["temp"] ? weatherData["main"]["temp"] : "N/A";
    feelsLikeEl.textContent = weatherData["main"]["feels_like"] ? weatherData["main"]["feels_like"] : "N/A";
    humidityEl.textContent = weatherData["main"]["humidity"] ? weatherData["main"]["humidity"] : "N/A";

    // Update wind text elements.
    windEl.textContent = weatherData["wind"]["speed"] ? weatherData["wind"]["speed"] : "N/A";
    windGustEl.textContent = weatherData["wind"]["gust"] ? weatherData["wind"]["gust"] : "N/A";

    // Update the main weather text element.
    weatherMainEl.textContent = weatherData["weather"][0]["main"] ? weatherData["weather"][0]["main"] : "N/A";

    // Update the location text element.
    locationEl.textContent = weatherData["name"] ? weatherData["name"] : "N/A";
}

// Select the necessary elements using querySelector.
const getWeatherButton = document.querySelector("#get-weather-btn");
const citySelector = document.querySelector("#city-select");

// Add an event listener to the getWeatherButton.
getWeatherButton.addEventListener(
    "click",
    () => {
        if (!citySelector.value) {
            // Return if the city selected is empty.
            return;
        }
        
        // Call the function to show the weather for the selected city.
        showWeather(citySelector.value);
    }
)
