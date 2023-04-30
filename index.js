const hourEl=document.getElementById("hour");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

//elements


//function

function  UpdateClock(){
    //vars
    let hour=new Date().getHours();
    let minutes=new Date().getMinutes();
    let seconds=new Date().getSeconds();
    let ampm="AM";

    //logic am and pm

    if (hour>12) {
        hour= hour-12;// 1 pm
        ampm="PM";

    }

    //ternary operator
    hour=hour<10?"0"+hour   : hour;
    seconds=seconds<10?"0"+seconds   : seconds;
    minutes=minutes<10?"0"+minutes   : minutes;

    //asigning values to text
    hourEl.innerText=hour;
    minutesEl.innerText=minutes;
    secondsEl.innerText=seconds;
    ampm.innerText=ampm;

    //to call this function every second
    //every 1 second this function is called
    setTimeout(()=>{ UpdateClock()},1000);
}



//calling function
UpdateClock();