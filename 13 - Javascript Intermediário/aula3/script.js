
// SELETOR POR ID
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'


// SELETOR POR TAG (vai selecionar apenas a primeira)
document.querySelector('a').innerText = '<b>Teste âncora</b>' //o innerText apenas insere o texto

//SELETOR DE MAIS DE 1 ITEM POR TAG
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){  //função anônima / callback= função passada para outra função p fazer alguma coisa lá dentro com essa função de dentro.
    //forEach é um método para percorrer arrays
    elemento.innerText = 'teste'
})


// SSELETOR POR CLASSE POR CLASSE

let boxes = document.querySelectorAll('.box')

boxes.forEach(function(elemento, index){

    elemento.innerHTML = 'caixas ' + (index + 1)
})