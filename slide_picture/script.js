setInterval(()=>{
    location.reload()
}, 10000)

function changePic(){
    document.getElementById('pic').style.right = '25vw'
    document.getElementById('pic').style.opacity = 1
}

setTimeout(()=>{
    fadePic()
}, 8000)

function fadePic(){
    document.getElementById('pic').style.opacity = 0
    document.getElementById('pic').style.transition = '2.5s'
}