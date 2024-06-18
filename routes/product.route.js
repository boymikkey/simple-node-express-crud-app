const express = require('express')
const router = express.Router()
const Product = require('../models/product.model')
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller')

//GET
router.get('/',getProducts);
router.get('/:id',getProduct);


//CREATE
router.post('/', createProduct);

//UPDATE
router.put('/:id', updateProduct)


//DELETE
router.put('/:id', deleteProduct)


module.exports = router;