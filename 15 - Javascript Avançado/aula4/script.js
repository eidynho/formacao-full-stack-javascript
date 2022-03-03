const clientes = [
    { name: 'Fulano', lastname: 'Da Silva'},
    { name: 'Ciclano', lastname: 'Santos'},
    { name: 'Beltrano', lastname: 'Moreira'},
]

let clientesFinal = [] //declarar variável fora

clientes.forEach(function(cliente){ //forEach: percorre arrays
    clientesFinal.push(cliente.name + ' ' + cliente.lastname) //atribuir valores p/ variável
})

console.log(clientesFinal)


// ou: utilizando map (programação funcional)
//map: utilizado para percorrer arrays e atribui valores para a variável
const clientesFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clientesFinalMap)