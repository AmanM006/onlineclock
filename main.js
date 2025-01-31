let sec = 0;
let interval = null;
const time = document.getElementById("time")
const start = document.getElementById("b1")
const pause = document.getElementById("b2")
const res = document.getElementById("b3")
res.style.opacity = 0.8
const items = document.querySelectorAll('.timer, .stopwatch, .world');
const stopw = document.querySelector('.stopwatch');
document.getElementsByClassName("timermain")[0].style.display = "none";
document.getElementsByClassName("worldmain")[0].style.display = "none";
items.forEach(i => i.classList.remove("active")); // Remove active class from all
    stopw.classList.add("active");

function padstart(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const hour = Math.floor(sec/3600);
    const min = Math.floor((sec%3600)/60);
    const secs = sec % 60; 
    time.innerHTML = `${padstart(hour)}:${padstart(min)}:${padstart(secs)}`;
}
function timed(){
    sec++;
    setTime()

}
function startClock(){
    if(interval) pauseClock()
    interval = setInterval(timed, 1000)
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

items.forEach(item => {
    item.addEventListener('click', function() {
        // Remove "active" class from all items
        items.forEach(i => i.classList.remove('active'));

        // Add "active" class to the clicked item
        this.classList.add('active');
    });
});

document.getElementsByClassName("timer")[0].addEventListener('click', function() {
    document.getElementsByClassName("stopmain")[0].style.display = "none";
    document.getElementsByClassName("worldmain")[0].style.display = "none";
    document.getElementsByClassName("timermain")[0].style.display = "flex";
    time.style.backgroundColor = "rgb(255, 126, 126);"
    
})

document.getElementsByClassName("world")[0].addEventListener('click', function() {
    document.getElementsByClassName("stopmain")[0].style.display = "none";
    document.getElementsByClassName("timermain")[0].style.display = "none";
    document.getElementsByClassName("worldmain")[0].style.display = "flex";

})


document.getElementsByClassName("stopwatch")[0].addEventListener('click', function() {
    document.getElementsByClassName("worldmain")[0].style.display = "none";
    document.getElementsByClassName("timermain")[0].style.display = "none";
    document.getElementsByClassName("stopmain")[0].style.display = "flex";

})
