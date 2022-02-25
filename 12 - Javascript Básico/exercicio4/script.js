function entrar() {

let nome = window.prompt('Digite o seu Nome:')
let idade = parseInt(window.prompt('Digite a sua idade:'))

if (nome === '') {
    alert('Preencha os campos corretamente!')
    return
} 

let idadeWrite

if (idade < 18) {
    idadeWrite = 'menor'
} else if (idade >= 18) {
    idadeWrite = 'maior'
} else {
    alert('Preencha os campos corretamente!')
    return
}

let mensagemPersonalizada = ''

if (nome === 'Thomas Anderson' || nome === 'thomas anderson') {
    mensagemPersonalizada = 'Você é personagem do filme The Matrix!'
}

let mensagemPrincipal = `Olá ${nome}, você é ${idadeWrite} de idade!`

document.querySelector('#h1').innerHTML = mensagemPrincipal

document.querySelector('#h2').innerHTML = mensagemPersonalizada
}