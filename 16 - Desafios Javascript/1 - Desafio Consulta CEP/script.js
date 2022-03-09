
const inputCep = document.querySelector('#inputCep')

const inputRua = document.querySelector('#inputRua')
const inputBairro = document.querySelector('#inputBairro')
const inputCidade = document.querySelector('#inputCidade')
const inputEstado = document.querySelector('#inputEstado')
const inputIBGE = document.querySelector('#inputIBGE')
const spanError = document.querySelector('#spanError')


const preencherDados =  endereco => {
    inputRua.value = endereco.logradouro
    inputBairro.value = endereco.bairro
    inputCidade.value = endereco.localidade
    inputEstado.value = endereco.uf
    inputIBGE.value = endereco.ibge
}

const pesquisarCep = async() => {
    const url = `https://viacep.com.br/ws/${inputCep.value}/json/`
    
    await fetch(url)
        .then(response => response.json())
        .then(preencherDados)
    
}

inputCep.onblur = pesquisarCep
