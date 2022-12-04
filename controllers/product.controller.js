const Product = require("../models/Product");
const User = require("../models/User");
const { getUser } = require("./user.controller");

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
        const user = await User.findOne({email: req.token.email});
        const product = await Product.create({ ...req.body, productOwner: user?.uid });
        res.json(product);
    } catch (error) {
        return next(error)
    }
};

const getProductsByCoord = async (req, res, next) => {
    try {
        const lat = +req.params.lat;
        const lng = +req.params.lng;
        const users = await User.aggregate([
            // Project a diff field that's the absolute difference along with the original doc.
            {$project: {diff: {$abs: {$subtract: [lat, +
                 '$lat']}}, doc: '$$ROOT'}},
            // Order the docs by diff
            {$sort: {diff: 1}},
            // Take the first one
            {$limit: 10}
        ]);

        const productIds = users.flatMap( user => {
            return user.onSellProduct;
        });

        console.log(productIds);

        // console.log(UsersSmallerLat)
        // console.log(UsersBiggerLat)
        // console.log(UsersSmallerLng)
        // console.log(UsersBiggerLng)
        res.json(productIds);
    } catch (error) {
        console.log(error)
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