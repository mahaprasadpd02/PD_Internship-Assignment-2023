document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "39ec018aec5b703f45610726059a4172";
    const searchButton = document.getElementById("searchButton");
    const locationInput = document.getElementById("locationInput");
    const weatherInfo = document.getElementById("weatherInfo");

    searchButton.addEventListener("click", () => {
        const location = locationInput.value;
        if (location === "") {
            alert("Please enter a location");
            return;
        }

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
                const description = data.weather[0].description;
                weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                weatherInfo.innerHTML = "Details for the specified place are not found ";
            });
    });
});