var express = require('express');
var router = express.Router();
let {getProducts, getProduct, editProduct, deleteProduct, addProduct} = require('../controllers/products.controller')

/* GET users listing. */
router.get('/', getProducts);
router.get('/:id', getProduct);

router.put('/:id', editProduct);

router.delete('/:id', deleteProduct);

router.post('/', addProduct);

module.exports = router;
