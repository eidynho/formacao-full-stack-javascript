/*

DESTRUCTURING ASSIGNMENT (desestruturação de atribuição)
    - desestruturação de objetos (pegar dados de objetos de maneira mais fácil)
*/



const obj = {
    nome: 'fulano',
    idade: 35,
}

const {
    nome,
    idade,
} = obj






function transformarEmJson(response) {
    return response.json()
}

function exibirNaTela(dados) {
    console.log(dados)
}

function exibirErro() {
    console.log('Ops, deu erro!')
}


const botaoCarregar = document.querySelector('#botaoCarregar')


botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(transformarEmJson)
        .catch(exibirErro)

        const {
            name,
            email,
            phone,
        } = dados

        console.log(name, email, phone)
    }