const router = require('express').Router()

const ProductController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)
//GET = obter dados
//POST = enviar/receber dados
//PUT = atualizar dados
//DELETE = remover dados

router.get('/products/:id?', ProductController.get) //:id? (significa que é opcional, e se não passar o id também funciona)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

module.exports = router