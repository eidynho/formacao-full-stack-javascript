let nome = window.prompt('Digite o seu Nome:')

let idade = Number(window.prompt('Digite a sua idade:'))

if (idade < 18 && idade >= 0) {
    document.write(`Olá ${nome}, você é menor de idade`)
} else if (idade >= 18) {
    document.write(`Olá ${nome}, você é maior de idade`)
} else {
    document.write('Ops, corrija os dados e tente novamente')
}