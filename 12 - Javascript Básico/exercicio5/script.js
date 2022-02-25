let inputNum = window.prompt('Digite qual tabuada você quer saber:')
let num = parseInt(inputNum)

for (let tabuada = 1; tabuada <= 10; tabuada++) {
    let resultado = num * tabuada
    let mensagem = (`${num} x ${tabuada} = ${resultado} <br>`)

    document.write(mensagem)
}
