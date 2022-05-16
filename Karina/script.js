var left = document.getElementById('left')
var center = document.getElementById('center')
var right = document.getElementById('right')
const images = [    
    'https://scontent.fssa15-1.fna.fbcdn.net/v/t1.6435-9/152250687_188199032891939_5733353886901482263_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=730e14&_nc_ohc=hx2FmHlagmsAX-dHGxJ&_nc_ht=scontent.fssa15-1.fna&oh=00_AT9K8Fw5YLVgAnDvpOuGNmfreKkHzhzTPpYpd9XNWnnyMg&oe=62A6F39A',
    'https://scontent.fssa15-1.fna.fbcdn.net/v/t1.6435-9/200860885_274989720879536_2549743727145327557_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=174925&_nc_ohc=hHer2D2WLcAAX_biwPw&_nc_ht=scontent.fssa15-1.fna&oh=00_AT_jAG2qJATq8B6RDtkNSOAkkz58wXGyR-QZX8rg8SzUxg&oe=62A68190',
    'https://scontent.fssa15-1.fna.fbcdn.net/v/t1.6435-9/199624315_273449911033517_1171945587281137759_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_ohc=f7cLnFAoMJUAX-v4_e1&_nc_ht=scontent.fssa15-1.fna&oh=00_AT-nbBp6Te2okF6hnCdKNYX3PXFRXXZ8cj_nX4atG-72AQ&oe=62A62773',
    'https://scontent.fssa15-1.fna.fbcdn.net/v/t39.30808-6/242484860_346728557038985_3475508870726875448_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=CF39GfbIPOEAX9-d04t&_nc_ht=scontent.fssa15-1.fna&oh=00_AT-wR20kb_n4LR-rwkxcg_m8cpzih5XYAn0no2HH4RLUaA&oe=6286FD47',
    'https://scontent.fssa15-1.fna.fbcdn.net/v/t39.30808-6/233597859_313420020369839_6046580833325069788_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=Qk_xFWYEwR0AX8OWvzC&_nc_ht=scontent.fssa15-1.fna&oh=00_AT8HAUwyOKiaiG2ugNB1MLvmAuCOf1WNkIH6fU4_m8hDqg&oe=628607EB',
    'https://scontent.fssa15-1.fna.fbcdn.net/v/t1.6435-9/151035646_184557803256062_6679905852573791006_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=174925&_nc_ohc=DakzL4VGkbYAX_0FTbJ&_nc_oc=AQlvy3tSYJs1LA6meM0k4LT1iMjekLHinLKCKYnbMjZFhl5bGxqhh4EdG0YiB-1KWjc&_nc_ht=scontent.fssa15-1.fna&oh=00_AT9Ycgd7F6iifOTyWsr4k4vDlkWI5pYktd2iowLcRZ4ZwQ&oe=62A5AB71',
]
var imgLen = images.length - 1
var counter = 0
var current = 1
var next = 2
var counterToLeft = imgLen
var currentToLeft = imgLen - 1
var nextToLeft = imgLen - 2
var interval


    
function start(){
    slidePic()
    
    interval = setInterval(() => {
        slidePic()
    
        setTimeout(() => {
            center.style.transition = '3s'
            center.style.opacity = '0'
        }, 5000);
            
    }, 7000)
}


//Move slide to left and right sides and stop it too

function moveLeft(){
    clearInterval(interval)
    slidePic()

    interval = setInterval(() => {
        slidePic()
    
        setTimeout(() => {
            center.style.transition = '3.5s'
            center.style.opacity = 0            
        }, 5000);
    
    }, 7000)
}

function stop(){
    clearInterval(interval)
}

function moveRight(){
    clearInterval(interval)
    slideToRight()

    interval = setInterval(() => {
        slidePic()

        setTimeout(() => {            
            center.style.transition = '3.5s'
            center.style.opacity = 0            
        }, 5000);
        
    }, 7000)
}

//Slide pictures

function slidePic(){
    
    if(counter <= images.length){
        
        left.src = images[counter]
        center.src = images[current]
        right.src = images[next]
        
        
        left.style.transform = 'scale(0.5)'
        left.style.transition = '3s'
        left.style.borderRadius = '25px'
        left.style.opacity = '0.7'
                
        center.style.transition = '3s'
        center.style.margin = '100px'
        center.style.borderRadius = '3px'
        center.style.transform = 'scale(2.5)'
        center.style.opacity = '1'

        right.style.transform = 'scale(0.5)'
        right.style.transition = '3s'
        right.style.borderRadius = '25px'
        right.style.opacity = '0.7'
                
        if(next > imgLen){
            next = 0
            right.src = images[next]
        }else if(current > imgLen){
            current = 0
            center.src = images[current]
        }else if(counter > imgLen){
            counter = 0
            left.src = images[counter]
        }
        
        console.log('Counter:', counter)
        console.log('Current:', current)
        console.log('Next:', next)
        
        counter++
        current++
        next++        
        
    }

}


//functio to slide to the right side

function slideToRight(){

    if(counter <= images.length){

        left.src = images[counter]
        center.src = images[current]
        right.src = images[next]
                        
        if(next < 0){
            next = imgLen
            right.src = images[next]
        }else if(current < 0){
            current = imgLen
            center.src = images[current]
        }else if(counter < 0){
            counter = imgLen
            left.src = images[counter]
        }
        
        console.log('Counter:', counter)
        console.log('Current:', current)
        console.log('Next:', next)
        
        counter--
        current--
        next--     
        
    }

}
