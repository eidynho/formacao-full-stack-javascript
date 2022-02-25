
let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false // flag (levanta uma bandeira pra determinar o estado de uma determinada aplicação)

function abrirOuFecharMenu() {
    
    if (aberto === false) {
        aberto = true
        menuMobile.classList.add('aberto')
        botaoMenu.innerText = 'fechar menu'

    } else if (aberto === true) {
        aberto = false
        menuMobile.classList.remove('aberto')
        botaoMenu.innerText = 'abrir menu'
    }
}