const { Router } = require('express')
const ProductController = require('../controllers/ProductController')

const router = Router()

router.get('/products', ProductController.getAll)
router.get('/products/:id', ProductController.get)
router.post('/products', ProductController.create)
router.put('/products/:id', ProductController.update)
router.delete('/products/:id', ProductController.delete)

module.exports = router