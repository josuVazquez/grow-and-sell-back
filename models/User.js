const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String
    },
    avatar: {
        type: String,
        default: null
    },
    name: {
        type: String,
    },
    email: {
        type: String
    },
    raiting: {
        type: String,
        default: null
    },
    latitude: {
        type: String,
        default: null
    },
    longitude: {
        type: String,
        default: null
    },
    onSellProducts: [{
        type: Schema.Types.ObjectId, 
        ref:'Product',
        default: []}
    ],
    purchasedPoducts: [{
        type: Schema.Types.ObjectId, 
        ref:'Product',
        default: []}
    ]
}, { _id: false });

module.exports = mongoose.model('user', userSchema);