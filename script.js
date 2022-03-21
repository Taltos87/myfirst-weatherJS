function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
    if (hours <10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes <10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sunday",  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = days[date.getDay()];

  return `${day} ${hours}: ${minutes}`;


} 
 
 
 
 
 
 
 
 function  displayTempreature(response) {
  let temperatureElement = document.querySelector(`#temperture`);
  let cityElement = document.querySelector(`#city`);
  let descriptionElement = document.querySelector(`#description`);
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector(`#date`);
  let iconElement = document.querySelector(`#icon`);

 temperatureElement.innerHTML = Math.round ( response.data.main.temp);
 cityElement.innerHTML = response.data.name;
 descriptionElement.innerHTML= response.data.weather[0].description;
 humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute(
  "src", 
  `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` );
iconElement.setAttribute("alt" , response.data.weather[0].description);

 // console.log(response.data);
}



function seach(city){
let apiKey =  "2bcda0ef514ca396d716955408357744";
//let city = "Oxford";
let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTempreature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityImputElement = document.querySelector(`#city-input`);
  console.log(cityImputElement.value);
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

seach ("Paris");