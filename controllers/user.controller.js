const User = require("../models/User");

const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findOneAndUpdate({email: req.token.email}, req.body);
        res.json(updatedUser);
    } catch (error) {
        return next(error)
    }
};

const createUser = async (req, res, next) => {
    try {
        const userExist = await User.findOne({email: req.token.email});
        if(userExist) {
            res.json(userExist);
            return
        }
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        return next(error)
    }
};

const getUser = async(req, res, next) => {
    try {
        const userExist = await User.findOne({email: req.token.email}).populate('favoriteProducts').exec((error, populated) => {
            console.log(error)
            console.log(populated)
            if(error) {
                return;
            }
            resolve(populated)
        });

        res.json(userExist)
    } catch (error) {
        return next(error)
    }
}

const addFavorite = async(req, res, next) => {
    try {
        const updated = await User.updateOne({email: req.token.email}, { $push: { favoriteProducts: req.params.productId } })
        console.log(updated);
    } catch (error) {
        return next(error)
    }
}

const removeFavorite = async(req, res, next) => {
    try {
        const updated = await User.updateOne({email: req.token.email}, { $pull: { favoriteProducts: req.params.productId } })
        console.log(updated);
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    updateUser,
    createUser,
    getUser,
    addFavorite,
    removeFavorite
}