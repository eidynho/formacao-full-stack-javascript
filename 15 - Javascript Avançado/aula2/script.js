/*

    HOISTING (IÇAR, ERGUER)

    Hoisting é o comportamento padrão do Javascript de mover as declara~~oes para o topo de um escopo.

*/

function teste() {

    function outraFuncao() {
        console.log('ok sou a outra função')
    }
}

teste()