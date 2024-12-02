# Simple-Weather-app

Weather App
A simple, user-friendly weather app that provides current weather information based on city input. Users can select between Celsius and Fahrenheit for temperature display. The app uses the WeatherStack API for weather data and OpenCage Geocoder API for city-state data.

Table of Contents
Overview
Features
Technologies Used
Setup Instructions
Usage
API Keys
How It Works
Folder Structure
Contributing
License

The Weather App allows users to check the weather forecast for a specific city by entering the city name. It displays the temperature, weather description, and an icon representing the current weather conditions. Users can switch between Celsius and Fahrenheit for temperature display.

This app combines two APIs:

WeatherStack API: Used for getting real-time weather data.
OpenCage Geocoder API: Used to fetch detailed location data (like state, city, and country).

![Screenshot 2024-12-02 145347](https://github.com/user-attachments/assets/a53dd571-5bf6-4e78-b471-6a7a1ba7ebea)


Features
Search by City: Enter a city name to get the current weather conditions.
Temperature Toggle: Toggle between Celsius and Fahrenheit.
Weather Icon: Display an icon that represents the current weather.
State and City Info: Display the city and state of the location (if available).
Responsive Design: The app is designed to be used on both desktop and mobile devices.

Technologies Used
HTML: Structure of the app.
CSS: Styles for a modern, responsive UI.
JavaScript: Handles the logic of fetching data from the APIs and dynamically displaying it.
WeatherStack API: Provides real-time weather data (temperature, weather description, etc.).
OpenCage Geocoder API: Fetches geolocation information (state, city, country).

Setup Instructions
Follow these steps to set up the project on your local machine:

1. Clone the Repository
First, clone the repository to your local machine:

git clone https://github.com/your-username/weather-app.git
cd weather-app

2. Create .env file
Create a .env file in the root directory and add your API keys:

WEATHERSTACK_API_KEY=your-weatherstack-api-key
OPENCAGE_API_KEY=your-opencage-api-key

3. Open the Project in VS Code
Open the project folder in your preferred IDE (Visual Studio Code recommended):

code .

Usage

1. Start the Application
Since this app is a simple static web app, you can open the index.html file directly in your browser. However, to use modern features like API requests, it's recommended to serve it with a local server.

If you have Live Server installed in VS Code:

Right-click on the index.html file.
Select Open with Live Server.
This will start a local server and open the app in your default browser.

2. Enter a City
Enter a city name in the input box.
Click the Get Weather button to fetch the weather information for the specified city.
3. Toggle Temperature Unit
Choose whether you want to display the temperature in Celsius or Fahrenheit by selecting from the dropdown.
4. View Results
The app will display the city and state (if available), the current temperature in the selected unit, and a weather description along with a weather icon.

![Screenshot 2024-12-02 145140](https://github.com/user-attachments/assets/c3296a21-c7a5-443f-a4dd-3a565c8a767a)

![Screenshot 2024-12-02 145155](https://github.com/user-attachments/assets/dd02831a-1c1a-4497-9f73-940c1b2da3b1)

![Screenshot 2024-12-02 145202](https://github.com/user-attachments/assets/b2a79d61-5b7a-490f-bc65-e29bde1b4630)


API Keys
You need to sign up for API keys from the following services:

1. WeatherStack API
Go to WeatherStack.
Sign up for a free account.
After registration, you'll receive an API key to fetch weather data.
Replace "YOUR_WEATHERSTACK_API_KEY" in the code with your actual API key.
2. OpenCage Geocoder API
Go to OpenCage Geocoder.
Sign up for a free account.
You'll receive an API key to fetch location data (city, state, country).
Replace "YOUR_OPENCAGE_API_KEY" in the code with your actual API key.

How It Works
User Input: When a user enters a city name and clicks Get Weather, the app first calls the OpenCage API to get the state and country data for the city.

Weather Data: After retrieving the location data, the app calls the WeatherStack API to get the weather details, including the temperature and weather description.

Display Information: The app then displays the weather data in a user-friendly format, along with a weather icon. The temperature can be toggled between Celsius and Fahrenheit based on the user's selection.

Error Handling: If an invalid city is entered or if there's an issue with fetching data, the app displays an error message.


Contributing
Contributions are welcome! To contribute to this project:

Fork the repository.
Create a new branch for your feature or bugfix.
Commit your changes and push to your forked repository.
Open a pull request to the main repository.


Acknowledgments
Thanks to WeatherStack for providing the weather API.
Thanks to OpenCage Geocoder for geolocation data.
Special thanks to the open-source community for making web development easier!
