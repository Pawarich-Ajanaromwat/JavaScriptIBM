function showweatherDetails(event) {
    event.preventDefault(); // Prevent form submission

    const city = document.getElementById('city').value;
    const apiKey = 'd09fb7788d13d726d4bd743e0d93f098'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                      <p>Temperature: ${data.main.temp} &#8451;</p>
                                      <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

// Set the event listener outside the fetch call
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
