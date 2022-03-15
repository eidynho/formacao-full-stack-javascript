// MVC - MODEL (banco de dados) VIEW (visualização (HTML, estáticos..)) CONTROLLER (responsável por gerenciar os dados)

const { text } = require('express')
const express = require('express')
const path = require('path') //biblioteca p manipular caminhos de pastas
const fs = require('fs')





const app = express()



// definindo o template engine
app.set('view engine', 'ejs')




// definindo os arquivos estáticos (quando não utilizar o template engine)
    // app.use(express.static(path.join(__dirname, 'views')))

// definindo os arquivos públicos
    app.use(express.static(path.join(__dirname, 'public')))


// habilita server para receber dados via post (formulário)    
    app.use(express.urlencoded({ extended: true }))


    
// rotas
app.get('/', (req, res) => { //REQuest, RESponse
    res.render('index', { //passando valores
        title: 'Página teste - Home'
    })
})

app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'Página teste - Posts',
        posts: [
            {
                title: "Novidade no mundo da tecnologia",
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur placeat quasi assumenda velit numquam quam quo amet aliquam aut adipisci, mollitia illum. Blanditiis aperiam odio vitae dignissimos laborum recusandae.',
                stars: 3,
            },
            {
                title: "Aprenda a criar um servidor com node.js",
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur placeat quasi assumenda velit numquam quam quo amet aliquam aut adipisci, mollitia illum. Blanditiis aperiam odio vitae dignissimos laborum recusandae.',
            },
            {
                title: "Javascript é a linguagem mais usada no mundo",
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur placeat quasi assumenda velit numquam quam quo amet aliquam aut adipisci, mollitia illum. Blanditiis aperiam odio vitae dignissimos laborum recusandae.',
                stars: 4,
            }
            
        ]
        
    })
})

app.get('/cadastro-posts', (req, res) => {
    const { c } = req.query
    res.render('cadastro-posts', { 
        title: 'Página teste - Cadastrar Post',
        cadastrado: c,
    })
})


app.post('/salvar-post', (req, res) => {
    const { title, text } = req.body

    const data = fs.readFileSync('./store/posts.json')
    const posts = JSON.parse(data)

    posts.push([
        title,
        text,
    ])

    const postsString = JSON.stringify(posts)
    fs.writeFileSync('./store/posts.json', postsString)

    res.redirect('/cadastro-posts?c=1')
})






// 404 error (not found)
app.use((req, res) => { // middleware (executa no meio da requisição)
    res.send('página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on port $${port}`))