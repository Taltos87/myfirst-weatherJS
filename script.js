function  displayTempreature(response) {
  let temperatureElement = document.querySelector(`#temperture`);
  let cityElement = document.querySelector(`#city`);
  let descriptionElement = document.querySelector(`#description`);
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

 temperatureElement.innerHTML = Math.round ( response.data.main.temp);
 cityElement.innerHTML = response.data.name;
 descriptionElement.innerHTML= response.data.weather[0].description;
 humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);


 console.log(response.data);
}
function seach(city){}
let apiKey =  "2bcda0ef514ca396d716955408357744";
let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTempreature);