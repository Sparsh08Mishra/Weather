function getWeather() {
    const apiKey = 'a1ea2acbfcebe8457bc1d0d2252e493b';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }
    
    // Corrected URLs with backticks for string interpolation
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current data:', error);
            alert('Error fetching current weather data. Please try again.');
        });

    
        };


function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
   
    
    // Clearing previous content
    weatherInfoDiv.innerHTML = '';
   
    tempDivInfo.innerHTML = '';

    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const temperatureHTML = `
        <p>${temperature}°C</p>
    `;

    const weatherHTML = `
        <p>${cityName}</p>
        <p>${description}</p>
    `;
    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfoDiv.innerHTML = weatherHTML;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;

    showImage();  // Calling the function to display the weather icon
}




// Function to display the weather icon
function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}
