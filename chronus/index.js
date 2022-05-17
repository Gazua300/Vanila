var seconds = 00
var tens = 00
var appendTens = document.getElementById('tens')
var appendSeconds = document.getElementById('seconds')
var Interval

function start(){
  clearInterval(Interval)
  Interval = setInterval(startTimer, 10)
}

function stop(){
  clearInterval(Interval)
}

function reset(){
  clearInterval(Interval)
  appendTens.innerHTML = "00"
  appendSeconds.innerHTML = "00"
}

function startTimer(){
  tens++

  if(tens <= 9){
    appendTens.innerHTML = "0" + tens
  }

  if(tens > 9){
    appendTens.innerHTML = tens
  }

  if(tens > 99){
    seconds++
    appendSeconds.innerHTML = "0" + seconds
    tens = 0
    appendTens.innerHTML = "0" + 0
  }

  if(seconds > 9){
    appendSeconds.innerHTML = seconds
  }
}
