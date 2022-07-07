// Caught Speeding CS10 Review

// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let driverSpeedInput = document.getElementById("driver-speed");
let speedLimitInput = document.getElementById("speed-limit");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", determineTicket);

function determineTicket() {
  // Input
 
  let driverSpeed = +driverSpeedInput.value;
  let speedLimit = +speedLimitInput.value;

  // Process & Output
 giveticket(driverSpeed,speedLimit)
}
function giveticket(drivespeed,drivelimit){
  if (drivespeed>=20+drivelimit)
  {outputSpan.innerHTML = "BIG TICKET";}
  else if (drivespeed <=drivelimit)
  {outputSpan.innerHTML = "NO TICKET";}
  else  {outputSpan.innerHTML = "SMALL TICKET";}
  }

