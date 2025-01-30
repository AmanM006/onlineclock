let sec = 0;
let interval = null;
const time = document.getElementById("time")
const start = document.getElementById("b1")
const pause = document.getElementById("b2")
const res = document.getElementById("b3")
res.style.opacity = 0.8

function padstart(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const hour = Math.floor(sec/3600);
    const min = Math.floor((sec%3600)/60);
    const secs = sec % 60; 
    time.innerHTML = `${padstart(hour)}:${padstart(min)}:${padstart(secs)}`;
}
function timer(){
    sec++;
    setTime()

}
function startClock(){
    if(interval) pauseClock()
    interval = setInterval(timer, 1000)
    start.style.visibility = "hidden"
    pause.style.visibility = "visible"
    res.style.opacity = 1
    time.style.filter = "brightness(1)"
    time.style.textShadow = "0 0 6px rgb(238, 255, 252)";

}

function pauseClock(){
    clearInterval(interval)
    interval=null;
    pause.style.visibility = "hidden"
    start.style.visibility = "visible"
    time.style.filter = "brightness(.8)"
    time.style.textShadow = "0 0 0px rgb(238, 255, 252)";

}

function resetClock(){
    pauseClock()
    sec = 0;
    setTime();
    res.style.opacity = 0.8
    time.style.filter = "brightness(.8)"
    time.style.textShadow = "0 0 0px rgb(238, 255, 252)";

}
