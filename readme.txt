# Weather App 🌤️

This is a sleek and modern weather application built with HTML, CSS, and JavaScript. It fetches real-time weather data from the [WeatherAPI](https://www.weatherapi.com/) for any city in the world and displays it in a clean, user-friendly interface with a dynamic background.

---

## 📸 Screenshot

Here is a preview of the application's interface:

![Weather App Screenshot](image_21ee45.jpg)

---

## ✨ Features

* **Real-time Data:** Fetches current weather conditions, temperature, and other details instantly.
* **City Search:** Allows users to search for the weather in any city worldwide.
* **Detailed Information:** Displays key metrics like "Feels Like" temperature, humidity, wind speed, and atmospheric pressure.
* **Dynamic UI:** The interface is updated dynamically with the fetched weather data, including a weather condition icon.
* **Default Location:** Loads weather for a default city when the page first opens.

---

## 🛠️ Technologies & API

* **HTML5:** For the basic structure and content of the app.
* **CSS3:** For styling the components and creating the modern look. (Note: `weather_style.css` is required).
* **JavaScript (ES6+):** For fetching data from the API, handling events, and manipulating the DOM.
* **WeatherAPI:** Used as the source for all real-time weather data.

---

## ⚙️ Setup and Usage

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Get your API Key:**
    * Go to [WeatherAPI.com](https://www.weatherapi.com/) and sign up for a free account.
    * You will be given a free API key upon registration.

3.  **Add the API Key to the project:**
    * Open the `weatherscript.js` file.
    * Find the following line:
        ```javascript
        const API_KEY = "ac023b5693a44e7db03125355250802"; // Replace with your actual API key
        ```
    * Replace the existing key with **your own API key**.

4.  **Open in Browser:**
    * Simply open the `index.html` file in your web browser to see the application in action.
