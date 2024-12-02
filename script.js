const countryStatus = async () => {
    console.log(userinput.value);
    if (userinput.value) {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput.value}&appid=0949f6f524fa5ee6e5981309bc89fde9&units=metric`);
        console.log(response);

        if (response.status == 200) {
            let WeatherDetails = await response.json();

            // Convert Celsius to Fahrenheit
            const tempInCelsius = WeatherDetails.main.temp;
            const tempInFahrenheit = Math.round((tempInCelsius * 1.8) + 32);

            result1.innerHTML = `
                    <div class="date-place">
                        <h4 class="place">
                            <i class="fa-solid fa-location-dot"></i>
                            ${WeatherDetails.name}, <span>${WeatherDetails.sys.country}</span>
                        </h4>
                    </div>
                    <h1 class="degree">
                        <span id="degree-value">${tempInFahrenheit}°F</span>
                    </h1>
                    <h4 class="mood">
                        <i class="fa-solid fa-cloud"></i>
                        ${WeatherDetails.weather[0].main}
                    </h4>
                `;

                result2.innerHTML = `
                    <div class="additional-content">
                        <div class="add-items">
                            <h1><span>${WeatherDetails.main.pressure} hPa</span></h1>
                            <p>PRESSURE</p>
                        </div>
                        <div class="add-items">
                            <h1><span>${WeatherDetails.wind.speed} MP/S</span></h1>
                            <p>WIND</p>
                        </div>
                        <div class="add-items">
                            <h1><span>${WeatherDetails.main.humidity} %</span></h1>
                            <p>HUMIDITY</p>
                        </div>
                    </div>
                `;
                
    }
}
};
userinput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        countryStatus();
    }
});