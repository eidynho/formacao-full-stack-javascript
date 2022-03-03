/*

 ARROW FUNCTIONS

 ES6
 
 As funções de seta nos permitem escrever uma sintaxe de função mais curta.

*/

const soma = (param1, param2) => {
    return param1 + param2

/* ou
const teste = (param1, param2) => param1 + param2
*/
}

const resultado = soma(1, 2)

console.log(resultado)

 // quando receber só um parâmetro, os parênteses não são obrigatórios
const teste = param1 => param1

console.log(teste('ok'));

const botao = document.querySelector('#botao')

botao.onclick = function() { //aqui chama o this
    console.log(this)
    // nas arrow functions, o this é o escopo da onde ela foi chamada, portanto GLOBAL nesse caso, se não fosse uma arrow function, seria escopo LOCAL.
}