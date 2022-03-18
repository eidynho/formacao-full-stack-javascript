const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params
    //se vier pelo carry string = req.query
    //se vier pelo POST = req.body

    let obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
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

    const product = await ProductsModel.findOneAndUpdate({ _id:id }, req.body, { new: true })

    /* ou:
     const product = await productsModel.findOne({ _id: id })

    await product.updateOne(req.body)
    */

    res.send({
        message: 'success',
        product,
    }) 

}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    const message = remove.deletedCount ? 'success' : 'error'

    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}