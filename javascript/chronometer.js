class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime= 0
    this.intervalId=null
  }

  start(callback) {
    // ... your code goes here    
      this.intervalId= setInterval(()=>{
        this.currentTime+=1
        if (callback) callback()
        console.log(this.currentTime)
      },1000)
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value>=0 && value<10){
      return "0" + value
    }else{
      return String(value)
    }

  }

  stop() {
    // ... your code goes here()
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    // ... your code goes here
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */

if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
  

let reloj= new Chronometer
reloj.computeTwoDigitNumber(4)
reloj.computeTwoDigitNumber(0)
reloj.computeTwoDigitNumber(15)



