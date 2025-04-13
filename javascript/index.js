const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const spaceSplits = document.getElementById('splits')

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
  printMilliseconds()
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
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())
  milDecElement.textContent = milliseconds[0]
  milUniElement.textContent = milliseconds[1]
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let stamp = chronometer.split()
  let liCode = `<li>${stamp}</li>`
  spaceSplits.innerHTML+= liCode
}

function clearSplits() {
  // ... your code goes here
  spaceSplits.innerHTML=""
}

function setStopBtn() {
  // ... your code goes here
  //chronometer.stop()
  btnLeftElement.setAttribute("class","btn stop")
  btnLeftElement.textContent="STOP"
}

function setSplitBtn() {
  // ... your code goes here
  //chronometer.stop()
  btnRightElement.setAttribute("class", "btn split")
  btnRightElement.textContent = "SPLIT"
}

function setStartBtn() {
  // ... your code goes here
  
  btnLeftElement.setAttribute("class", "btn start")
  btnLeftElement.textContent="START"
}

function setResetBtn() {
  // ... your code goes here
  //chronometer.reset()
  btnRightElement.setAttribute("class", "btn reset")
  btnRightElement.textContent = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.textContent==="START"){
    chronometer.start(()=>{
      printTime()
    })
   setStopBtn()
   setSplitBtn()
  }else{
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.textContent==="RESET"){
    chronometer.reset()
    printTime()
    clearSplits()
  }else{
    printSplit()
  }
});

