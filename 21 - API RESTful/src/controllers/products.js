const productsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params
    //se vier pelo carry string = req.query
    //se vier pelo POST = req.body

    let obj = id ? { _id: id } : null

    const products = await productsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new productsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'success'
    })

    
}

module.exports = {
    get,
    post,
}