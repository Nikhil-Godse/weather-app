const apiKey = "0b577e57eabf044d10183243e5362298";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";

let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let input = document.querySelector('input');
let button = document.querySelector("button");
let weatherIcon = document.querySelector(".weatherIcon");

async function checkweather(){
    const responce = await fetch(apiURL+`q=${input.value}` + `&appid=${apiKey}`);

    if(responce.status ===404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display="none";
    }

    var data = await responce.json()
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="Clear.png";
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src="haze.png";
    }
    else{
        weatherIcon.src="snow.png";
    }
}

button.addEventListener("click", ()=>{
    checkweather();
})
