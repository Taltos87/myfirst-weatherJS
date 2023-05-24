function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];

    return `${day} ${hours}: ${minutes}`;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);

let celsiusTemp = null;




function displayForecast() {
    let forecastElement = document.querySelector("#forecast");

    forecastElement.innerHTML =`    
    <div class="row">
    <div class="col-2">
     <div class="weather-forecast-date">Wed</div> 
     <img
     src="http://openweathermap.org/img/wn/01d.png"
     alt=""
     width="42" />
     <div class="weather-forecast-temperatures">
         <span class="weather-forecast-temperature-max"> 18° </span>
         <span class="weather-forecast-temperature-min"> 12° </span>  
    </div>
</div>
</div>`; 
}







function displayTemp(response) {
    let temperatureElement = document.querySelector(`#temperature`);
    let cityElement = document.querySelector(`#city`);
    let descriptionElement = document.querySelector(`#description`);
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector(`#date`);
    let iconElement = document.querySelector(`#icon`);

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
    
    
  celsiusTemp = response.data.main.temp;

  if (fahrenheitLink.classList.contains("active")) {
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemp);
  }
    
    
    getForecast(response.data.coord);
}

function handleSubmit(event) {
    event.preventDefault();
    const cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

function search(city) {
    const apiKey = "2bcda0ef514ca396d716955408357744";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemp);
}

function showFahrenheitTemp(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemp);
    search(cityInputElement.value); // Call search function to update temperature unit in API call
  }
  
  function showCelsiusTemp(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemp);
    search(cityInputElement.value); // Call search function to update temperature unit in API call
  }



let form = document.getElementById("search-form");
form.addEventListener("submit", handleSubmit);

search("London");
  
displayForecast();



/* Changes:
 - Fixed Typo search
 - Fixed typo in displayTemp
 - Calling handle submit function before search
 - Calling display temp after axios call
*/
