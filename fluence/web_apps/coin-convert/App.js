const currencyOneEl = document.querySelector('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector('[data-js="currency-two"]')
const timesCurrencyOneEl = document.querySelector('[data-js="currency-one-times"]')
const convertedValueEl = document.querySelector('[data-js="converted-value"]')
const alertMessage = document.querySelector('[data-js="alert"]')
const errorMsg = document.getElementById('errormsg')


const showAlert = (e)=>{
    const div = document.createElement('div')
        const button = document.createElement('button')

        div.textContent = e.message
        button.textContent = 'X'
        button.className = 'btn-alert'
        div.appendChild(button)
        
        errorMsg.insertAdjacentElement('afterbegin', div)

        button.addEventListener('click', ()=>{
            div.remove()
        })
}


const state = (()=>{
    let exchangeRate = {}

    return {
        getExchangeRate: ()=> exchangeRate,
        setExchangeRate: (newExchangeRate)=>{
            if(!newExchangeRate.conversion_rates){
                showAlert({ message: 'O objeto precisa da propriedade conversion_rates' })

                return
            }

            exchangeRate = newExchangeRate

            return exchangeRate
        }
    }
})()


const getUrl = (currency)=>{
    return `https://v6.exchangerate-api.com/v6/8561787fb59e0d6b978138e4/latest/${currency}`
}


const getErrorMessage = (errorType)=>({
    'unsupported-code': 'A moeda não existe no nosso banco de dados.',
    'malformed-request': 'O endpoint da sua requisição deve seguir a seguinte estrutura: https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD',
    'invalid-key': 'Chave da API inválida!',
    'inactive-account': 'Conta inativa. É necessário que você acesse o email cadastrado e confirme a ativação da sua conta.',
    'quota-reached': 'Sua conta já alcanção o limite de requisições mensais.'
})[errorType] || 'Não foi possível obter as informnções.'


const fetchExchangeRate = async(url)=>{
    try{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error('Não foi possível obter as informções. Verifique sua conexão e tente novamente.')
        }

        const exchangeRateData = await response.json()

        if(exchangeRateData.result === 'error'){
            throw new Error(getErrorMessage(exchangeRateData['error-type']))
        }

        return state.setExchangeRate(exchangeRateData)

    }catch(e){
        showAlert(e)
    }
}


const showInitialInfo = ({ conversion_rates })=>{
    const firstOption = Object.keys(conversion_rates).map(currency=>{
        return `<option ${currency === 'USD' ? 'selected' : ''}>
                    ${currency}
                </option>`
    })

    const secondOption = Object.keys(conversion_rates).map(currency=>{
        return `<option ${currency === 'BRL' ? 'selected' : ''}>
                    ${currency}
                </option>`
    })

        
    currencyOneEl.innerHTML = firstOption
    currencyTwoEl.innerHTML = secondOption

    convertedValueEl.textContent = conversion_rates.BRL.toFixed(2)
}

const init = async()=>{
    const url = getUrl('USD')
    const internalExchangeRate = await fetchExchangeRate(url) 

    if(internalExchangeRate && internalExchangeRate.conversion_rates){
        showInitialInfo(internalExchangeRate)
    }    
}


const getMultipliedExchangeRate = (conversion_rates)=>{
    const currencyTwo = conversion_rates[currencyTwoEl.value]

    return (timesCurrencyOneEl.value * currencyTwo).toFixed(2)
}


const showUpdatedRates = ({ conversion_rates })=>{
    convertedValueEl.textContent = getMultipliedExchangeRate(conversion_rates)
}


timesCurrencyOneEl.addEventListener('input', ()=>{
    const { conversion_rates } = state.getExchangeRate()
    
    convertedValueEl.textContent = getMultipliedExchangeRate(conversion_rates)
})

currencyTwoEl.addEventListener('input', ()=>{
    const internalExchangeRate = state.getExchangeRate()

    showUpdatedRates(internalExchangeRate)
})

currencyOneEl.addEventListener('input', async(e)=>{
    const url = getUrl(e.target.value)
    const internalExchangeRate = await fetchExchangeRate(url)
    
    showUpdatedRates(internalExchangeRate)
})


init()
