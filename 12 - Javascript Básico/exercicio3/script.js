function entrar() {

let h1 = document.querySelector('#h1')
let h2 = document.querySelector('#h2')

let nome = window.prompt('Digite o seu Nome:')

let idade = Number(window.prompt('Digite a sua idade:'))

let idadeWrite

if (idade < 18 && idade >= 0) {
    idadeWrite = 'menor'
} else if (idade >= 18) {
    idadeWrite = 'maior'
} else {
    document.write('Ops, corrija os dados e tente novamente.')
}

if (nome === 'Thomas Anderson' || nome === 'thomas anderson') {
    h2Write = 'Você é personagem do filme The Matrix!'
}


h1.innerHTML = `Olá ${nome}, você é ${idadeWrite} de idade!`
h2.innerHTML = `${h2Write}`

}