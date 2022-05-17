var currentImageIndex = 0,
images = document.querySelectorAll('#slider img'),
max = images.length


function nextImage(){
    images[currentImageIndex].classList.remove('selected')
    currentImageIndex++
    
    if(currentImageIndex >= max){
        currentImageIndex = 0        
    }
    
    images[currentImageIndex].classList.add('selected')
    console.log(currentImageIndex)
}

function start(){
    setInterval(()=>{
        nextImage()
    }, 2000)
}

window.addEventListener('load', start)
