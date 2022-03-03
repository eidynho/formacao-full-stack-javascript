const clientes = [
    { name: 'Fulano', lastname: 'Da Silva', age: 14},
    { name: 'Ciclano', lastname: 'Santos', age: 18},
    { name: 'Beltrano', lastname: 'Moreira', age: 29},
]

//filter serve para filtrar elementos de um array
// serve também para manipular arrays, além de percorrer, retornará um array.

const clientesMaiores = clientes.filter( cliente => cliente.age >= 18 )

console.log(clientesMaiores)