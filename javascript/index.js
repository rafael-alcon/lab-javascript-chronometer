const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.textContent= minutes[0]
  minUniElement.textContent=minutes[1]
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.textContent = seconds[0]
  secUniElement.textContent = seconds[1]
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop()
}

function setSplitBtn() {
  // ... your code goes here
  chronometer.stop()
  
}

function setStartBtn() {
  // ... your code goes here
  chronometer.start(()=>{
    printTime()
  })
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.textContent==="START"){
    setStartBtn()
    btnLeftElement.setAttribute("class","btn stop")
    btnLeftElement.textContent="STOP"
  }else{
    setStopBtn()
    btnLeftElement.setAttribute("class", "btn start")
    btnLeftElement.textContent="START"
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.textContent==="RESET"){
    setResetBtn()
    btnRightElement.setAttribute("class", "btn split")
    btnRightElement.textContent = "SPLIT"
  }else{
    setSplitBtn()
    btnRightElement.setAttribute("class", "btn reset")
    btnRightElement.textContent = "RESET"
  }
});

