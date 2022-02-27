

let cont = (document.querySelector('.contagem'))
let contagem = parseInt(cont)
contagem = 0


let subtrair = document.querySelector('.subtrair')
let somar = document.querySelector('.somar')

let decreaseInterval
let increaseInterval

subtrair.onclick = function() {
    clearInterval(increaseInterval)

    subtrair.classList.add('red')
    somar.classList.remove('green')

    decreaseInterval = setInterval(function(){

        contagem--
        cont.innerText = contagem
    }, 100)
}

somar.onclick = function() {
    clearInterval(decreaseInterval)

    somar.classList.add('green')
    subtrair.classList.remove('red')

    increaseInterval = setInterval(function(){

        contagem ++
        cont.innerText = contagem
    }, 100)

}