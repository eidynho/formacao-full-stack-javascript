const inputText = document.querySelector('.inputText')
const btnEnviar = document.querySelector('.btnEnviar')
const loading = document.querySelector('.loading')

const mensagem = document.querySelector('.mensagem')

btnEnviar.onclick = function job() {
    loading.classList.remove('none')
    btnEnviar.classList.add('none')
    return new Promise((resolve, reject) => {
        
        setTimeout( () => {
            loading.classList.add('none')
            inputText.classList.add('none')
            resolve(`${inputText.value}`)
        }, 3000)
        
    })
    .then(msg => mensagem.innerHTML += msg)
}
