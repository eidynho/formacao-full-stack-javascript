const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}

const somaMedia = aluno.notas.reduce( ( acc, curr ) => acc += curr)

const mediaAluno = (somaMedia / aluno.notas.length)
const mediaAlunoArredondada = Math.ceil(mediaAluno)

console.log(`A média de ${aluno.nome} foi ${mediaAlunoArredondada} para o total de ${aluno.notas.length} bimestres.`)