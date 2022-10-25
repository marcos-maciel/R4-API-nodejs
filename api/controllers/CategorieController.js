const database = require('../models')

class CategorieController {
    static async getAllCategorie (req, res) {
        try {
            const allCategories = await database.Categories.findAll()
            return res.status(200).json(allCategories)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

module.exports = CategorieController