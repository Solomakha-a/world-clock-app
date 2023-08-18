function updateTime() {

let moscowElement = document.querySelector("#moscow");
let moscowDateElement = moscowElement.querySelector(".date");
let moscowTimeElement = moscowElement.querySelector(".time");
let moscowTimeZoneElement = moment().tz("Europe/Moscow");

moscowDateElement.innerHTML = moscowTimeZoneElement.format("MMMM Do YYYY");
moscowTimeElement.innerHTML = moscowTimeZoneElement.format("HH:mm:ss [<small>]A[</small>]");

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTimeZoneElement = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTimeZoneElement.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTimeZoneElement.format("HH:mm:ss [<small>]A[</small>]");

let seoulElement = document.querySelector("#seoul");
let seoulDateElement = seoulElement.querySelector(".date");
let seoulTimeElement = seoulElement.querySelector(".time");
let seoulTimeZoneElement = moment().tz("Asia/Seoul");

seoulDateElement.innerHTML = seoulTimeZoneElement.format("MMMM Do YYYY");
seoulTimeElement.innerHTML = seoulTimeZoneElement.format("HH:mm:ss [<small>]A[</small>]");

let beijingElement = document.querySelector("#beijing");
let beijingDateElement = beijingElement.querySelector(".date");
let beijingTimeElement = beijingElement.querySelector(".time");
let beijingTimeZoneElement = moment().tz("Asia/Harbin");

beijingDateElement.innerHTML = beijingTimeZoneElement.format("MMMM Do YYYY");
beijingTimeElement.innerHTML = beijingTimeZoneElement.format("HH:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);



