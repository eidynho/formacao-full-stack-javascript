const productsModel = require('../models/products')

async function get(req, res) {
    const products = await productsModel.find()


    res.send(products)
}

module.exports = {
    get,
}