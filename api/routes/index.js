const bodyParser = require('body-parser')
const users = require('./userRoutes')
const products = require('./productRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(users)
    app.use(products)
}