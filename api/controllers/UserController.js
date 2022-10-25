const database = require('../models')

class UserController {
    static async getAllUsers (req, res) {
        try {
            const allUsers = await database.Users.findAll()
            return res.status(200).json(allUsers)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

module.exports = UserController