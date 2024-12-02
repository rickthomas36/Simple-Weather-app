const apiKey = "2a9058218b40a9740ed7db9bae87657f"; // Replace with your actual WeatherStack API key

document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();
    const unit = document.getElementById("unit").value; // Get selected unit
  
    if (!city) {
      alert("Please enter a city name");
      return;
    }

  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
  console.log(url); // Debugging the API URL

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Debugging the API response
    if (data.error) {
      throw new Error(data.error.info);
    }

    const tempCelsius = data.current.temperature;

    // Convert to Fahrenheit if needed
    const temperature = unit === "f"
      ? (tempCelsius * 9/5) + 32 // Convert to Fahrenheit
      : tempCelsius; // Keep Celsius

    // Determine unit symbol
    const unitSymbol = unit === "m" ? "°C" : "°F";

    document.getElementById("weatherResult").innerHTML = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <p>Temperature: ${temperature.toFixed(1)} ${unitSymbol}</p>
    <p>Weather: ${data.current.weather_descriptions[0]}</p>
    <img src="${data.current.weather_icons[0]}" alt="Weather icon">
  `;
})
.catch(error => {
  alert(`Error: ${error.message}`);
});
});
