const alunos = [

    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        nota: 10,
    },
    {
        nome: 'José',
        sobrenome: 'Moreira',
        nota: 4,
    },
    {
        nome: 'Paulo',
        sobrenome: 'Henrique',
        nota: 7,
    },
    {
        nome: 'Sara',
        sobrenome: 'Souza',
        nota: 5,
    },
    {
        nome: 'Clara',
        sobrenome: 'Barbosa',
        nota: 9,
    },
    {
        nome: 'Rodrigo',
        sobrenome: 'Barros',
        nota: 4,
    },
    {
        nome: 'Renato',
        sobrenome: 'Barros',
        nota: 7,
    },
    {
        nome: 'Andrea',
        sobrenome: 'Batista',
        nota: 6,
    },
    {
        nome: 'Carla',
        sobrenome: 'Campos',
        nota: 3,
    },
]

    const listaAlunosFiltrados = document.querySelector('.listaAlunosFiltrados')
    const inputNota = document.querySelector('#nota')
    const btnFiltar = document.querySelector('#btnFiltrar')


    btnFiltar.onclick = function() {
        const alunosNotaInput = alunos.filter( aluno => aluno.nota == inputNota.value )


        html = ''

        if (alunosNotaInput.length > 0) {
            alunosNotaInput.forEach( aluno => {
                html += `<li>${aluno.nome} ${aluno.sobrenome} | Nota: ${aluno.nota} <br></li>` 
            })

        } else if (alunosNotaInput.length == 0) {
            html += `Nenhum aluno tirou essa nota`
            
        }
        

        listaAlunosFiltrados.innerHTML = html
        inputNota.value = ''

    }

