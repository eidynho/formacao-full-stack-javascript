
let quadrado = document.querySelector('.quadrado')

function minhaFuncao(evento) {
    console.log(evento.key)
}

// ao clicar
//quadrado.onclick = minhaFuncao

// ao mexer o mouse em cima
//quadrado.onmousemove = minhaFuncao

// quando o mouse entrar
//quadrado.onmouseenter = minhaFuncao

// quando o mouse sair
//quadrado.onmouseout = minhaFuncao



// ao redimensionar o tamanho da tela
//window.addEventListener('resize', minhaFuncao)

// ao apertar uma tecla
window.addEventListener('keypress', minhaFuncao)