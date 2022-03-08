

const alunos = [
    {
      nome: 'Maria',
      sobrenome: 'da Silva',
    },
    {
      nome: 'José',
      sobrenome: 'Moreira',
    },
    {
      nome: 'Paulo',
      sobrenome: 'Henrique',
    },
    {
      nome: 'Pedro',
      sobrenome: 'Souza',
    },
]

const alunoNomeCompleto = alunos.map( aluno => aluno.nome + ' ' + aluno.sobrenome)

console.log(alunoNomeCompleto);