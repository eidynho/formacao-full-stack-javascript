const fs = require('fs')

fs.readFile('./clientes.json', function (error, content) {
    if(error) {
        console.log('ops, deu erro', error)
    } else {
        console.log(JSON.parse(content))
    }
})