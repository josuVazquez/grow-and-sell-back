const User = require("../models/Product");

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
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        return next(error)
    }
};

module.exports = {
    updateUser,
    createUser
} 