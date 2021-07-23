let timerInput = document.getElementById("time");
let buttonStart = document.getElementById("button");
let timerShow  = document.getElementById("timer");


buttonStart.addEventListener("click", function(){
    timeMinut = parseInt(timerInput.value) * 60;
})

timer = setInterval(function(){
    seconds = timeMinut%60;
    minuts = timeMinut/60%60;
    hour = timeMinut/60/60%60;

    if (timeMinut <=0){
        clearInterval(timer);
        alert("Time is up");
    }else{
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
        timerShow .innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)
