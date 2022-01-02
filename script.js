// Title Countdown Sequence
let timeleft = 14;
let startTime = document.getElementById("titleDigits");
let countdownTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(countdownTimer);
    startTime.style.fontStyle = "italic";
    startTime.style.fontWeight = "900";
    startTime.innerHTML = "15";

  } else {
    startTime.style.fontStyle = "italic";
    startTime.style.fontWeight = "900";
    startTime.innerHTML = timeleft.toString();
  }
  timeleft -= 1;
}, 1000);

// console.log("testing");