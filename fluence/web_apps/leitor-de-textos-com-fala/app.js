const main = document.querySelector('main')
const buttonInsertText = document.querySelector('.btn-toggle')
const buttonReadText = document.querySelector('#read')
const divTextBox = document.querySelector('.text-box')
const closeDivTextBox = document.querySelector('.close')
const selectElement = document.querySelector('select')
const textArea = document.querySelector('textarea')

const humanExpression = [
    { img: './img/drink.jpg', text: 'Estou com sede' },
    { img: './img/food.jpg', text: 'Estou com fome' },
    { img: './img/tired.jpg', text: 'Estou cansado' },
    { img: './img/hurt.jpg', text: 'Estou machucado' },
    { img: './img/happy.jpg', text: 'Estou feliz' },
    { img: './img/angry.jpg', text: 'Estou com raiva' },
    { img: './img/scared.jpg', text: 'Estou assustado' },
    { img: './img/outside.jpg', text: 'Quero ir lá fora' },
    { img: './img/sad.jpg', text: 'Estou triste' },
    { img: './img/home.jpg', text: 'Quero ir pra casa' },
    { img: './img/school.jpg', text: 'Quero ir pra escola' },
    { img: './img/grandma.jpg', text: 'Quero ver a vovó' }
]


const utterance = new SpeechSynthesisUtterance()


const setTextMessage = (text)=>{
    utterance.text = text
}

const speakText = ()=>{
    speechSynthesis.speak(utterance)
}

const setVoice = (e)=>{
    utterance.voice = voices.find(voice => voice.name === e.target.value)
}


const createExpressionBox = ({ img, text })=>{
    const div = document.createElement('div')

    div.classList.add('expression-box')
    div.innerHTML = `
        <img src='${img}' alt='${text}'>
        <p class='info'>${text}</p>
    `

    div.addEventListener('click', ()=>{
        setTextMessage(text)
        speakText()

        div.classList.add('active')

        setTimeout(()=>{
            div.classList.remove('active')
        }, 1000)
    })

    main.appendChild(div)
}


humanExpression.forEach(createExpressionBox)


let voices = []

speechSynthesis.addEventListener('voiceschanged', ()=>{
    voices = speechSynthesis.getVoices()

    const googleVoicePT_BR = voices.find(voice=> voice.name === "Google português do Brasil")

    
    voices.forEach(({ name, lang })=>{
        const option = document.createElement('option')

        option.value = name

        if(googleVoicePT_BR && option.value === googleVoicePT_BR.name){
            utterance.voice = googleVoicePT_BR
            option.selected = true
        }
        
        option.textContent = `${lang} | ${name}`        
        selectElement.appendChild(option)
    })

})


buttonInsertText.addEventListener('click', ()=>{
    divTextBox.classList.add('show')
})

closeDivTextBox.addEventListener('click', ()=>{
    divTextBox.classList.remove('show')
})


selectElement.addEventListener('change', setVoice)

buttonReadText.addEventListener('click', ()=>{
    setTextMessage(textArea.value)
    speakText()
})