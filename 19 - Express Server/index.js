// MVC - MODEL (banco de dados) VIEW (visualização (HTML, estáticos..)) CONTROLLER (responsável por gerenciar os dados)

const express = require('express')
const path = require('path') //biblioteca p manipular caminhos de pastas
const app = express()




// definindo os arquivos estáticos
const staticFolder = path.join(__dirname, 'views')
const expressStatic = express.static(staticFolder)
app.use(expressStatic)
    // OU maneira mais comum:
    // app.use(express.static(path.join(__dirname, 'views')))


// definindo os arquivos públicos
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)
    // OU maneira mais comum:
    // app.use(express.static(path.join(__dirname, 'public')))




    
// rotas
app.get('/', (req, res) => { //REQuest, RESponse
    res.render('views/index')
})

app.get('/sobre', (req, res) => { //REQuest, RESponse
    res.send('página sobre')
})




// 404 error (not found)
app.use((req, res) => { // middleware (executa no meio da requisição)
    res.send('página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listen on port $${port}`))