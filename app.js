const apiKey = "2a9058218b40a9740ed7db9bae87657f"; // Replace with your actual WeatherStack API key
const geocodeApiKey = "9e1e6ea65039499bb15e3db89be1d727";

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${geocodeApiKey}`;
  console.log(geocodeUrl); // Debugging the API URL

  fetch(geocodeUrl)
    .then(response => response.json())
    .then(locationData => {
      if (locationData.results.length === 0) {
        throw new Error("City not found");
      }

      // Get the coordinates (latitude, longitude) from the OpenCage API response
      const lat = locationData.results[0].geometry.lat;
      const lng = locationData.results[0].geometry.lng;
      const state = locationData.results[0].components.state || "";
      const country = locationData.results[0].components.country || "";

      // Now get the weather data using WeatherStack API and the coordinates
      const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${lat},${lng}&units=m`;

      return fetch(weatherUrl)
        .then(response => response.json())
        .then(weatherData => {
          if (weatherData.error) {
            throw new Error("Weather data not found");
          }

          // Determine the unit (Celsius or Fahrenheit) selected by the user
          const selectedUnit = document.querySelector('input[name="unit"]:checked').value;

          // Convert temperature based on selected unit (Celsius or Fahrenheit)
          let temperature = weatherData.current.temperature;
          if (selectedUnit === "Fahrenheit") {
            temperature = (temperature * 9/5) + 32; // Convert to Fahrenheit
          }

          // Show weather details
          const weatherResult = `
            <h2>${weatherData.location.name}, ${state || country}</h2>
            <p>Temperature: ${temperature.toFixed(1)} °${selectedUnit === "Celsius" ? "C" : "F"}</p>
            <p>Weather: ${weatherData.current.weather_descriptions[0]}</p>
            <img src="${weatherData.current.weather_icons[0]}" alt="weather icon">
          `;

          document.getElementById("weatherResult").innerHTML = weatherResult;
        })
        .catch(error => {
          alert(error.message);
        });
    })
    .catch(error => {
      alert(error.message);
    });
});
