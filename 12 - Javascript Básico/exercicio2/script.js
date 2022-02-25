let nome = window.prompt('Digite o seu Nome:')

let idade = Number(window.prompt('Digite a sua idade:'))




if (idade < 18 && idade >= 0) {
    idadeWrite = 'menor'
} else if (idade >= 18) {
    idadeWrite = 'maior'
} else {
    document.write('Ops, corrija os dados e tente novamente.')
}

let mensagemPersonalizada = ''

if (nome === 'Thomas Anderson' || nome === 'thomas anderson') {
    mensagemPersonalizada = 'Você é personagem do filme The Matrix!'
}


let mensagem = `Olá ${nome}, você é ${idadeWrite} de idade! ${mensagemPersonalizada}`

document.write(mensagem)