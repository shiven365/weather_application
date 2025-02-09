let cityName = document.querySelector(".weather_city");
let date_time = document.querySelector(".weather_data_time");
let w_forcast = document.querySelector(".weather_forcast");
let w_temperature = document.querySelector(".weather_temperature");
let w_icon = document.querySelector(".weather_icon");
let w_mintem = document.querySelector(".weather_min");
let w_maxtem = document.querySelector(".weather_max");
let w_feel_like = document.querySelector(".weather_feel_like");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");
let searchInput = document.querySelector("#city_name");
let searchForm = document.querySelector(".weather_search");

const API_KEY = "ac023b5693a44e7db03125355250802"; // Replace with your actual API key

const getWeatherData = async (city) => {
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
        const res = await fetch(weatherUrl);
        const data = await res.json();
        console.log(data);

        // Update HTML elements with API data
        cityName.textContent = `${data.location.name}, ${data.location.country}`;
        date_time.textContent = `Updated: ${data.current.last_updated}`;
        w_forcast.textContent = data.current.condition.text;
        w_temperature.textContent = `${data.current.temp_c}°C`;
        w_mintem.textContent = `Min: ${data.current.temp_c}°C`;
        w_maxtem.textContent = `Max: ${data.current.temp_c}°C`;
        w_feel_like.textContent = `${data.current.feelslike_c}°C`;
        w_humidity.textContent = `${data.current.humidity}%`;
        w_wind.textContent = `${data.current.wind_kph} km/h`;
        w_pressure.textContent = `${data.current.pressure_mb} hPa`;
        w_icon.innerHTML = `<img src="${data.current.condition.icon}" alt="Weather Icon">`;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

// Search functionality
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = searchInput.value.trim();
    if (city) {
        getWeatherData(city);
    }
});

// Load default city on page load
window.addEventListener("load", () => {
    getWeatherData("Mumbai"); // Default city
});