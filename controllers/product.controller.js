const Product = require("../models/Product");
const User = require("../models/User");

const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findOne( { _id: req.params.id });
        res.json(product);
    } catch (error) {
        return next(error)
    }
};
  
const updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct)
    } catch (error) {
        return next(error)
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);
        res.json(deletedProduct);
    } catch (error) {
        return next(error)
    }
};

const createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        return next(error)
    }
};

const getProductsByCoord = async (req, res, next) => {
    try {
        const product = await User.find(req.body);
        res.json(product);
    } catch (error) {
        return next(error)
    }
};

module.exports = {
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct,
    getProductsByCoord
} 