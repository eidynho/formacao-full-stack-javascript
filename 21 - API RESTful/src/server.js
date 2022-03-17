const express = require('express')
    //const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


// conexão com o banco de dados
db.connect()


//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))



app.use('/api', routes)



//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is lintening on port ${port}`))