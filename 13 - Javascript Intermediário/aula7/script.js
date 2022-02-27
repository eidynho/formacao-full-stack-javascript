

let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')
let tarefa = document.querySelector('#inputTarefa')

botaoCadastrar.onclick = function() {
    toast.classList.add('visible')
    toast.innerHTML = `Tarefa ${tarefa.value} cadastrada com sucesso`

    setTimeout(function(){
        toast.classList.remove('visible')
    }, 5000)
}