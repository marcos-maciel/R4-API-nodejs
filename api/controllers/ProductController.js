const database = require('../models')

class ProductController {
    static async getAll(req, res) {
        try {
            const allProducts = await database.Products.findAll()
            return res.status(200).json(allProducts)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async get(req, res) {
        const { id } = req.params
        try {
            const product = await database.Products.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(product)
        } catch(err) {
            return res.status(500).json(err.message)
        }
    }

    static async create(req, res) {
        const newProduct = req.body
        try {
            const newProductCreate = await database.Products.create(newProduct)
            return res.status(200).json(newProductCreate)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const updateProduct = req.body
        try {
            const product = await database.Products.update(updateProduct, {
                where: { id: Number(id) }
            })
            if (product == 1) {
                return res.status(200).json(`Atualizado com sucesso`)
            } else {
                return res.status(500).json('Erro ao atualizar')
            }
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            const product = await database.Products.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json('Deletado com sucesso')
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

module.exports = ProductController