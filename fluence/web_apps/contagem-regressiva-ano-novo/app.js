const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const nextYearContainer = document.querySelector('#year')
const countdown = document.querySelector('#countdown')
const spinner = document.querySelector('#loading')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`january 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear


const updateCountdown = ()=>{
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    daysContainer.textContent = days < 10 ? '0' + days : days
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds    
}


setTimeout(()=>{
    spinner.remove()
    countdown.style.display = 'flex'
}, 1000)

setInterval(updateCountdown, 1000)