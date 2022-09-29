var express = require('express');
const { createProduct, getProduct, updateProduct, deleteProduct, getProductsByCoord } = require('../controllers/product.controller');
const router = express.Router();

router.get('/:id', getProduct);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.get('/:coord', getProductsByCoord);

module.exports = router;