var hour = 00
var minutes = 00
var seconds = 00
const appendHour = document.getElementById('hour')
const appendMin = document.getElementById('minutes')
const appendSeconds = document.getElementById('seconds')
const week = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
var day = 0
var Interval
const d = new Date()

document.getElementById('hours').innerHTML = `${d.toLocaleString()}`


function start(){
  clearInterval(Interval)
  Interval = setInterval(startWatch, 1000);
}

function stop(){
  clearInterval(Interval)
}

function reset(){
  location.reload()
}

function startWatch(){
  seconds++

  if(seconds <= 9){
    appendSeconds.innerHTML = '0' + seconds
  }

  if(seconds > 9){
    appendSeconds.innerHTML = seconds
  }

  if(seconds > 59){
    minutes++
    appendSeconds.innerHTML = '00'
    seconds = 0
    appendMin.innerHTML = '0' + minutes
  }

  if(minutes > 9){
    appendMin.innerHTML = minutes
  }

  if(minutes > 59){
    hour++
    appendMin.innerHTML = '00'
    minutes = 0
    appendHour.innerHTML = '0' + hour
  }

  if(hour > 9){
    appendHour.innerHTML = hour
  }

  if(hour > 23){
    day++
    appendHour.innerHTML = '00'
    hour = 0
  }

  if(day > 6){
    day = 0
  }

  if(day === 0){
    document.getElementById('sab').style.color = 'black'
    document.getElementById('dom').style.color = 'red'
  }else if(day === 1){
    document.getElementById('dom').style.color = 'black'
    document.getElementById('seg').style.color = 'red'
  }else if(day === 2){
    document.getElementById('seg').style.color = 'black'
    document.getElementById('ter').style.color = 'red'
  }else if(day === 3){
    document.getElementById('ter').style.color = 'black'
    document.getElementById('qua').style.color = 'red'
  }else if(day === 4){
    document.getElementById('qua').style.color = 'black'
    document.getElementById('qui').style.color = 'red'
  }else if(day === 5){
    document.getElementById('qui').style.color = 'black'
    document.getElementById('sex').style.color = 'red'
  }else{
    document.getElementById('sex').style.color = 'black'
    document.getElementById('sab').style.color = 'red'
  }

}


function arrowRight(){
  day++

  if(day > 6){
    day = 0
    document.getElementById('sab').style.color = 'black'
  }

  document.getElementById(week[day]).style.color = 'red'
  document.getElementById(week[day-1]).style.color = 'black'
}

function arrowLeft(){
  day--

  if(day < 0){
    day = 6
    document.getElementById('dom').style.color = 'black'
  }

  document.getElementById(week[day]).style.color = 'red'
  document.getElementById(week[day+1]).style.color = 'black'
}
