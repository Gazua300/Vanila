const seya = 'https://i.pinimg.com/originals/d4/77/17/d47717367b5323273ecc4f5a697220ae.gif'
const shiriu = 'https://i.pinimg.com/originals/a2/65/b3/a265b39e9c7d4692fd30777399da912e.gif' 
const shun = 'http://4.bp.blogspot.com/-lL7Toh3S5ZA/U35N_Qhtw9I/AAAAAAAAHlQ/xOULD40GgHg/s1600/Shun+de+Andr%C3%B4meda+2.gif'
const ikki = 'https://i.pinimg.com/originals/74/fa/eb/74faebab52b1f2a958f510f581cc329b.gif'
const yoga = 'http://4.bp.blogspot.com/-F_d7yOXHI7g/U35KvKEnbvI/AAAAAAAAHjk/Qeir0sFmnJ4/s1600/Yoga+2.gif'


const slide = [seya, shiriu, shun, ikki, yoga]

function showMenu(){
    document.getElementById('menu').style.display = 'block'      
}

let menuBar = document.getElementById('menu')

function showNav(){   
   menuBar.style.top = '3vh'
   menuBar.style.opacity = '1'        
}
function hideNav(){
    menuBar.style.top = '-10vh'
    menuBar.style.opacity = '0'
}
    
let res = document.getElementById('pics')
let count = 1
document.getElementById('img').src =  slide[count]


function forward(){        
        count++
        document.getElementById('img').src =  slide[count]
        if(count >= 4){
            count = -1
        } 
       
}
function backward(){    
    count--
    document.getElementById('img').src =  slide[count]
    if(count < 1){
        count = 5
    }    
}


//https://wallpapercave.com/wp/wp2567197.jpg
