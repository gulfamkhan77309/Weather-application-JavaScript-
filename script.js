const apiKey = "009308bffee5cd7126621e2311d3e6ad";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');



async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if(response.status == 404) {
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].id >= 801 && data.weather[0].id <= 804) {
    weatherIcon.src = "images/clouds.png"
  } 
   else if(data.weather[0].id == 800 ) {
    weatherIcon.src = "images/clear.png"
  }
   else if(data.weather[0].id >= 700 && data.weather[0].id <= 781) {
    weatherIcon.src = "images/mist.png"
  }
   else if(data.weather[0].id >= 600 && data.weather[0].id <= 622) {
    weatherIcon.src = "images/snow.png"
  }
    else if(data.weather[0].id >= 500 && data.weather[0].id <= 531) {
    weatherIcon.src = "images/rain.png"
  }
    else if(data.weather[0].id >= 300 && data.weather[0].id <= 321) {
    weatherIcon.src = "images/drizzle.png"
  }

  document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";

  }
  
   
}


searchBtn.addEventListener("click" , function() {
  checkWeather(searchBox.value);
})


