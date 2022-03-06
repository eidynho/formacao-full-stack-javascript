const clientes = [
    { name: 'Thiago', score: 34},
    { name: 'Jaqueline', score: 38},
    { name: 'Sarah', score: 80},
    { name: 'Clara', score: 50},
    { name: 'Sophia', score: 98}

]

//o reduce permite manipular elementos e retornar objetos, strings... , não obriga a retornar sempre um array como no map e no filter.


/*
se fazer com filter (mais complicado)
const pass = clientes.filter ( cliente => cliente.score >= 50 )
const fail = clientes.filter ( cliente => cliente.score < 50)

console.log(pass)
console.log(fail)
*/

// COM REDUCE:


// acc = accumulator
// curr = current
const clientesFinal = clientes.reduce( (acc, curr) => {
    if (curr.score >= 50) {
        acc.pass.push(curr)
    } else if (curr.score < 50) {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass: [],
    fail: []
})

console.log(clientesFinal)



const numeros = [1, 2, 3, 4]
// 2 - 3 - 4 - 5

const numerosFinal = numeros.reduce( (acc, curr) => {

    if (numeros.indexOf(curr) == 0) {
        acc += `${curr + 1}`
    } else {
        acc += ` - ${curr + 1}`
    }
    

    return acc
}, '')

console.log(numerosFinal)