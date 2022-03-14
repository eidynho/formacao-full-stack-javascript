const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response) {

    if (request.url === '/') {
        fs.readFile('../client/index.html', function (error, content) {
            response.end(content)
        })
    }
    if (request.url === '/teste') {
        response.end('ok, funcionou')
    }
})

server.listen(8080)
console.log('Servidor escutando na porta 8080')