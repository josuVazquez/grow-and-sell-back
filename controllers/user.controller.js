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
        const userExist = await User.findOne({email: req.token.email});
        if(userExist) {
            res.json(userExist)
            next()
            return
        }
        console.log('creating')
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