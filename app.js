//  document.write("Huzaifa");
var min=0;
var sec=0;
var msec=0;
var hour=0;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var hourheading=document.getElementById("hour");
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec >=100){
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
    }    
    else if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }
    else if(min >=60){
        hour++
        hourheading.innerHTML=hour;
        min=0;
    }
}

function start(){
    interval = setInterval(timer,10)
    const button = document.querySelector('button')
    button.disabled=true;

}

function stop(){
    clearInterval(interval);
    const button = document.querySelector('button')
    button.disabled=false;
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    hour=0;
    msecHeading.innerHTML=msec;
secHeading.innerHTML=sec;
minHeading.innerHTML=min;
hourheading.innerHTML=hour;
stop();
}