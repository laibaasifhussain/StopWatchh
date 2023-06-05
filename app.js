

// <!-- ----------------STOP WATCH--------------- -->


var sec = 00;
var min = 00;
var hour = 00;


var secVal = document.getElementById("sec");
var minVal = document.getElementById("min");
var hourVal = document.getElementById("hour");


var interval;

function renderVal(){
    secVal.innerHTML= sec;
    minVal.innerHTML= min;
    hourVal.innerHTML= hour;
}


function timestart(){
    startbtn.disabled = true;
    stopbtn.disabled = false;
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if(min == 60){
            hour++;
            min = 0;
        }
    }
    renderVal();
    console.log(sec);
}


function timer(){
    interval = setInterval(function(){
        timestart();
    },1000);
}


function stopTimer(){
    stopbtn.disabled = true;
    startbtn.disabled = false;
    clearInterval(interval);
}


function resettime(){
    sec = 0;
    min = 0;
    hour = 0;
    stopTimer();
    renderVal();
}


// --------------------END------------------------
// ----------------COUNTDOWN-------------------


// function countDown() 
// {
//     if (sec === 0 && min === 0 && hour === 0) {
//       stopTimer();
//       return;
//     }
  
//     sec--;
  
//     if (sec < 0) {
//       sec = 59;
//       min--;
  
//       if (min < 0) {
//         min = 59;
//         hour--;
//       }
//     }
//     renderVal();
// }
  
// function timer(){
//     startbtn.disabled = true;
//     stopbtn.disabled = false;
//     interval = setInterval(function()
//     {
//         countDown();
//     },1000);
// }


// var sec = +prompt("Enter Seconds");
// var min = +prompt("Enter minutes");
// var hour = +prompt("Enter hour");

// var secVal = document.getElementById("sec");
// var minVal = document.getElementById("min");
// var hourVal = document.getElementById("hour");

// var interval;

// function renderVal(){
//     secVal.innerHTML= sec;
//     minVal.innerHTML = min;
//     hourVal.innerHTML = hour;
// }

// function countDown() 
// {
//     if (sec === 0 && min === 0 && hour === 0) {
//       stopTimer();
//       return;
//     }
  
//     sec--;
  
//     if (sec < 0) {
//       sec = 59;
//       min--;
  
//       if (min < 0) {
//         min = 59;
//         hour--;
//       }
//     }
//     renderVal();
// }
  
// function timer(){
//     startbtn.disabled = true;
//     stopbtn.disabled = false;
//     interval = setInterval(function()
//     {
//         countDown();
//     },1000);
// }

// function stopTimer(){
//     stopbtn.disabled = true;
//     startbtn.disabled = false;
//     clearInterval(interval);
// }

// function resettime(){
//     sec = 0;
//     min = 0;
//     hour = 0;
//     stopTimer();
//     renderVal();
// }
