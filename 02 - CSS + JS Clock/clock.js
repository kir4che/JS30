function setDateTime() {
    let dt = new Date().toLocaleString("zh-TW");
    document.querySelector(".datetime").innerHTML = dt;
}
setInterval(setDateTime, 1000);

const now = new Date();

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

var hourDeg = ((hour/12)*360) + ((min/60)*6) + 90;
var minDeg = ((min/60)*360) + ((sec/60)*6) + 90;
var secDeg = ((sec/60)*360) + 90;

function setClock() {
    hourDeg += 360/(60*60*12);
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minDeg += 360/(60*60);
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secDeg += 360/60;
    secHand.style.transform = `rotate(${secDeg}deg)`;
}
setInterval(setClock, 1000);