
const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

let selectEstados = document.querySelector('.select-estados')
let spEstado = document.querySelector('#spEstado')
let rjEstado = document.querySelector('#rjEstado')

let divCidades = document.querySelector('.div-cidades')
let selectCidades = document.querySelector('.select-cidades')



selectEstados.onchange = function abrirCidades(valor){
    const estado = valor.target.value

    let listaCidadesAberta
    if (estado === 'spOption') {
        listaCidadesAberta = cidades.sp
    } 
    
    if (estado === 'rjOption') {
        listaCidadesAberta = cidades.rj
    }
    
    if (estado === '') {

    }


    let htmlCidades = `<option value=''>-- Selecione a Cidade --</option>`

    for (let cidade of listaCidadesAberta) {
        htmlCidades += `<option value='${cidade}'>${cidade}</option>`
    }

    selectCidades.innerHTML = htmlCidades
    divCidades.classList.add('visible')
    divCidades.classList.remove('div-cidades')
}


let formCadastro = document.querySelector('#formCadastro')
let btn = document.querySelector('#btn')
let spanError = document.querySelector('.error')

let temErro = false

formCadastro.onsubmit = function(e) {
    e.preventDefault()

    let selectEstado = document.forms['formCadastro']['estado']
    let selectCidade = document.forms['formCadastro']['cidade']

    if(!selectEstado.value){
        temErro = true
        selectEstado.classList.add('inputError')

        let span = selectEstado.nextSibling.nextSibling
        span.innerText = 'Selecione o estado'    
    } else {
        selectEstado.classList.remove('inputError')

        let span = selectEstado.nextSibling.nextSibling
        span.innerText = ''    
    }


    if(!selectCidade.value){
        temErro = true
        selectCidade.classList.add('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerText = 'Selecione a cidade'    
      } else {
        selectCidade.classList.remove('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerText = ''    
      }

      if (!temErro) {
        formulario.submit()
      }
}
