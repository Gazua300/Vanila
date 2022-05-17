var months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
var left = document.getElementById('left')
var right = document.getElementById('right')
var month = document.getElementById('month')
var d = new Date()
var counter = d.getMonth()


//Get current month

document.getElementById('month').innerHTML = months[counter]
document.getElementById(months[counter]).style.display = 'block'

//Get current date

const table = document.getElementById(months[counter])
var rowLength = table.rows.length

for(var i = 0; i < rowLength; i++){
  var tableCells = table.rows.item(i).cells

  for(var j = 0; j < tableCells.length; j++){
    var cellData = tableCells.item(j).innerHTML

    if(Number(cellData) === d.getDate()){
      tableCells.item(j).style.background = 'lightgreen'
    }
  }
}

//MOVE MONTHS TO PREVIOUS TO NEXT

function goLeft(){
  counter--

  if(counter < 0){
      counter = 0
  }

  month.innerHTML = months[counter]
  document.getElementById(months[counter]).style.display = 'block'
  document.getElementById(months[counter+1]).style.display = 'none'
  console.log(months[counter])

}

function goRight(){
  counter ++

  if(counter > months.length - 1){
    counter = 11
  }

  month.innerHTML = months[counter]
  document.getElementById(months[counter]).style.display = 'block'
  document.getElementById(months[counter-1]).style.display = 'none'
  console.log(months[counter])

}
