const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img')
var index = 0
var Interval


img[0].style.width = '325px'
img[0].style.height = '375px'
img[0].style.opacity = 1


function start(){
    carousel()
    
    img[0].style.transform = 'scale(0.6)'
    img[0].style.transition = '1.5s'
    img[0].style.marginRight = '-20px'
    
    Interval = setInterval(()=>{
        carousel()
    }, 0.001)
}

function stop(){
    clearInterval(Interval)
}


function carousel(){
    index++    
    
    if(index > img.length - 2){
        clearInterval(Interval)
        document.getElementById('restartBtn').style.display = 'block'                
    }
    
    console.log(`Index: ${index}: translateX(${-index*230}px)
    Array: ${img}
    Tamanho do array: ${img.length}`)
    
    imgs.style.transform = `translateX(${-index*230}px)`
    
    
    img[index].style.transform = 'scale(1.5)'
    img[index].style.transition = '1.5s'
    img[index].style.opacity =  1
    img[index-1].style.transform = 'scale(1)'
    img[index-1].style.opacity = '0.5'
    
}


