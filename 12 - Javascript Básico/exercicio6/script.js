let listaAtores = [
    {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
    },
  
    {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
    },
  
    {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início'
    }
  ]

  let htmlAtores = ''

  for (contador = 0; contador < listaAtores.length; contador++) {
    let ator = listaAtores[contador]

    let nome = ator.nome
    let personagem = ator.personagem
    let filme = ator.filme
    
    htmlAtores += `
    <div class="box">
      <h3>${nome}</h3>
      <p>Interpreta o personagem ${personagem} no filme ${filme}.</p>
    </div>
    `
  }

  let content = document.querySelector('.boxes')
  content.innerHTML = htmlAtores

