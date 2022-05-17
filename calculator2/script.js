function insert(n){
  document.getElementById('res').innerHTML += n
}

function clean(){
  document.getElementById('res').innerHTML = ''
}

function back(){
  var lastChar = document.getElementById('res').innerHTML
  document.getElementById('res').innerHTML = lastChar.substring(0, lastChar.length - 1)
}

function calculate(){
  var res = document.getElementById('res').innerHTML

  if(res){
    document.getElementById('res').innerHTML = eval(res)
  }
}
