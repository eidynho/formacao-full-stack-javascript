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

async function put(req, res) {
    const { id } = req.params

    const product = await productsModel.findOneAndUpdate({ _id:id }, req.body, { new: true })

    /* ou:
     const product = await productsModel.findOne({ _id: id })

    await product.updateOne(req.body)
    */

    res.send({
        message: 'success',
        product,
    }) 

}

module.exports = {
    get,
    post,
    put,
}