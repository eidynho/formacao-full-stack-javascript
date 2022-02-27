

let cont = (document.querySelector('.contagem'))
let contagem = parseInt(cont)
contagem = 0


let subtrair = document.querySelector('.subtrair')
let somar = document.querySelector('.somar')



subtrair.onclick = function() {
    contagem--
    cont.innerHTML = contagem
}

somar.onclick = function() {
    contagem++
    cont.innerHTML = contagem
}