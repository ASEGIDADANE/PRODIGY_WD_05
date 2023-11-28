const apiKey = "9747397ecf9cf5df0119594b243a86ab";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img.weatherIcon");

async function checkweather(city) {
    const response = await fetch(`${apiUrl}${encodeURIComponent(city)}&appid=${apiKey}`);
    const data = await response.json();
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".tem").innerHTML = Math.round(data.main.temp ) + 'ºC';
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", function () {
    const city = searchBox.value;
    checkweather(city);
});