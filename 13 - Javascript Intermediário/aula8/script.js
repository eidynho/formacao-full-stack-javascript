
let contador = document.querySelector('#contador')

let count = 0

//irá executar a cada X tempo, nesse caso, 1600ms
let intervalo = setInterval(function() {
    count++
    contador.innerText = count
}, 60)

let botaoPausar = document.querySelector('#botaoPausar')

//para pausar a contagem
botaoPausar.onclick = function(){

    clearInterval(intervalo)
}