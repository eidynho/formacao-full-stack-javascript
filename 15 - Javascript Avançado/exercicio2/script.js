const media = 7

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
        nome: 'Pedro',
        sobrenome: 'Souza',
        nota: 5,
    },
]

const alunosAcimaDaMedia = alunos.filter( aluno => aluno.nota >= media )

console.log(alunosAcimaDaMedia)