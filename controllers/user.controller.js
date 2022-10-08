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
            res.json(userExist)
            next()
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
        const userExist = await User.findOne({email: req.token.email});
        res.json(userExist)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    updateUser,
    createUser,
    getUser
} 