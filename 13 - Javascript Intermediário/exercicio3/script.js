
const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

let estados = document.querySelector('#estados').value
let sp = document.querySelector('#sp')
let rj = document.querySelector('#rj')

estados.onchange = function(){
    if (estados = sp) {
        console.log('teste')
    }
}