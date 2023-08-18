function updateTime() {

let moscowElement = document.querySelector("#moscow");
if (moscowElement) {
let moscowDateElement = moscowElement.querySelector(".date");
let moscowTimeElement = moscowElement.querySelector(".time");
let moscowTimeZoneElement = moment().tz("Europe/Moscow");

moscowDateElement.innerHTML = moscowTimeZoneElement.format("MMMM Do YYYY");
moscowTimeElement.innerHTML = moscowTimeZoneElement.format("HH:mm:ss [<small>]A[</small>]"); }

let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTimeZoneElement = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTimeZoneElement.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTimeZoneElement.format("HH:mm:ss [<small>]A[</small>]");}

let seoulElement = document.querySelector("#seoul");
if (seoulElement) {
let seoulDateElement = seoulElement.querySelector(".date");
let seoulTimeElement = seoulElement.querySelector(".time");
let seoulTimeZoneElement = moment().tz("Asia/Seoul");

seoulDateElement.innerHTML = seoulTimeZoneElement.format("MMMM Do YYYY");
seoulTimeElement.innerHTML = seoulTimeZoneElement.format("HH:mm:ss [<small>]A[</small>]");}

let beijingElement = document.querySelector("#beijing");
if (beijingElement) {
let beijingDateElement = beijingElement.querySelector(".date");
let beijingTimeElement = beijingElement.querySelector(".time");
let beijingTimeZoneElement = moment().tz("Asia/Harbin");

beijingDateElement.innerHTML = beijingTimeZoneElement.format("MMMM Do YYYY");
beijingTimeElement.innerHTML = beijingTimeZoneElement.format("HH:mm:ss [<small>]A[</small>]");}

}

function updateCity(event) {
  
let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>`;

}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

