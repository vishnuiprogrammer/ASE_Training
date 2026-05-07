// This API Key from OpenWeatherMap
const API_KEY = '15f4210d233df61df65f3d9e810db4b0';


// It combines the URL
function buildURL(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
}
/*
// OpenWeather API returns this structure:
{
"name": "Pune",                    // City name
"sys": { "country": "IN" },        // Country code
"weather": [{
"main": "Clear",                 // Weather type
"description": "clear sky"       // Detailed description
}],
"main": {
"temp": 28.5,                    // Current temperature
"feels_like": 32.1,              // Feels like temperature
"temp_min": 26.0,                // Min temperature
"temp_max": 30.5,                // Max temperature
"humidity": 65,                  // Humidity %
"pressure": 1008                 // Pressure hPa
},
"wind": { "speed": 5.5 },          // Wind speed m/s
"visibility": 8000,                // Visibility in meters
"clouds": { "all": 10 }            // Cloud cover %
}
*/

// Search weather by the 
async function searchWeather() {

    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }
    const data = await fetchCurrentWeatherByCity(city);
    displayWeatherInformation(data);
}

//Fetch the weather information by the city name
async function fetchCurrentWeatherByCity(city) {
    const URL = buildURL(city);
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// According to the weather it applies the icon
function getWeatherIcon(weatherType) {
    const iconMap = {
        'Clear': 'fas fa-sun',
        'Clouds': 'fas fa-cloud',
        'Rain': 'fas fa-cloud-rain',
        'Drizzle': 'fas fa-cloud-drizzle',
        'Thunderstorm': 'fas fa-cloud-bolt',
        'Snow': 'fas fa-snowflake',
        'Mist': 'fas fa-smog',
        'Smoke': 'fas fa-smog',
        'Haze': 'fas fa-smog',
        'Dust': 'fas fa-wind',
        'Fog': 'fas fa-smog',
        'Sand': 'fas fa-wind',
        'Ash': 'fas fa-smog',
        'Squall': 'fas fa-wind',
        'Tornado': 'fas fa-tornado'
    };
    return iconMap[weatherType] || 'fas fa-sun';
}



function displayWeatherInformation(data) {

    // If response == successful then execute this
    if (data && data.cod === 200) {
        const weatherType = data.weather[0].main;
        const weatherDesc = data.weather[0].description.toUpperCase();
        const iconClass = getWeatherIcon(weatherType); // Returns the class name by weather type.

        document.getElementById('cityName').textContent = data.name + ', ' + data.sys.country;
        document.getElementById('weatherDesc').textContent = weatherDesc;

        const iconElement = document.getElementById('weatherIcon');
        iconElement.className = iconClass;  // Applies the class name 

        document.getElementById('temp').textContent = Math.round(data.main.temp);
        document.getElementById('feelsLike').textContent = Math.round(data.main.feels_like);
        document.getElementById('humidity').textContent = data.main.humidity;
        document.getElementById('windSpeed').textContent = data.wind.speed.toFixed(2) + ' m/s';
        document.getElementById('pressure').textContent = data.main.pressure + ' hPa';
        document.getElementById('visibility').textContent = (data.visibility / 1000).toFixed(2) + ' km';
        document.getElementById('clouds').textContent = data.clouds.all + '%';
        document.getElementById('minTemp').textContent = Math.round(data.main.temp_min);
        document.getElementById('maxTemp').textContent = Math.round(data.main.temp_max);

    } else if (data && data.cod === '404') {  // Error occur from the client side
        alert('City not found! Please check the spelling.');
    } else { // Error occur from the server side.
        alert('Error fetching weather data. Please try again later.');
    }
}

document.getElementById('cityInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

window.addEventListener('load', async () => {
    //First time fetch the pune weather & show it on the UI
    const data = await fetchCurrentWeatherByCity("Pune");
    displayWeatherInformation(data);
});