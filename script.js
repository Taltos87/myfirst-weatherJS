function  displayTempreature(response) {
  console.log(response.data);
}
let apiKey =  "2bcda0ef514ca396d716955408357744"
let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTempreature);