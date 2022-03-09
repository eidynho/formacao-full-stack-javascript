const usdInput = document.querySelector('#usdInput')
const btnCalcular = document.querySelector('.btnCalcular')
const resultadoBrl = document.querySelector('.resultado')
const outline = document.querySelector('#outline')

const usdToBrl = (money) => {
    const conta = money.USD_BRL * usdInput.value
    const result = conta.toString().replace(".", ",")
    resultadoBrl.innerHTML = `R$${result}`
    outline.classList.add('container-result')

}

btnCalcular.onclick = async() => {
    
    const url = 'https://free.currconv.com/api/v7/convert?q=USD_BRL,BRL_USD&compact=ultra&apiKey=a272c56548a2d4665357'

    await fetch(url)
        .then(response => response.json())
        .then(usdToBrl)
        
}

