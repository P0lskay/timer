let timerInput = document.getElementById("time");
let buttonStart = document.getElementById("button");
let timerShow  = document.getElementById("timer");

function colorCheck(min){
    let html = document.getElementsByTagName('html');
    if (min === 1){
        html[0].style.background = 'linear-gradient( to top left, #e4eee4, #d8ac08,  #e4eee4, #d8ac08 )';
    }
    else if (min < 5){
        html[0].style.background = 'linear-gradient( to top left, #c83333, #e4eee4, #c83333, #e4eee4)';
    }
}

function zeroShow(digit){
    if (digit < 10){
        return ('0'+digit);
    }
    return (digit);
}

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
        let strTimer = `${zeroShow(Math.trunc(hour))}:${zeroShow(Math.trunc(minuts))}:${zeroShow(seconds)}`;
        timerShow .innerHTML = strTimer;
    }
    colorCheck(timeMinut/60%60);
    --timeMinut;
}, 1000)
