const productsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params
    //se vier pelo carry string = req.query
    //se vier pelo POST = req.body

    let obj = id ? { _id: id } : null

    const products = await productsModel.find(obj)

    res.send(products)
}

module.exports = {
    get,
}