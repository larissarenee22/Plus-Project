let now = new Date();

let h5 = document.querySelector("h5");

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
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
let day = days[now.getDay()];

h5.innerHTML = `${day} ${hour}:${minute}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-location");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
  let cityInput = document.querySelector("#search-location");
  let city = cityInput.value;
  let apiKey = "45228cead4cd07184e0658264e6106da";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#location-form");

form.addEventListener("submit", searchCity);

function displayWeather(response) {
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

let searchLocation = document.querySelector("#location-form");
searchLocation.addEventListener("submit", searchCity);
