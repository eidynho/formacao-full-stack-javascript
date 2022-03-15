// MVC - MODEL (banco de dados) VIEW (visualização (HTML, estáticos..)) CONTROLLER (responsável por gerenciar os dados)

const express = require('express')
const path = require('path') //biblioteca p manipular caminhos de pastas
const app = express()



// definindo o template engine
app.set('view engine', 'ejs')




// definindo os arquivos estáticos (quando não utilizar o template engine)
    // app.use(express.static(path.join(__dirname, 'views')))

// definindo os arquivos públicos
    app.use(express.static(path.join(__dirname, 'public')))


    
// rotas
app.get('/', (req, res) => { //REQuest, RESponse
    res.render('index')
})

app.get('/posts', (req, res) => { //REQuest, RESponse
    res.render('posts')
})




// 404 error (not found)
app.use((req, res) => { // middleware (executa no meio da requisição)
    res.send('página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on port $${port}`))