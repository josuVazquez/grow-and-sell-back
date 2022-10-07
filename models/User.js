const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: String
    },
    photoURL: {
        type: String,
        default: null
    },
    rating: {
        type: Number,
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
    lat: {
        type: String,
        default: null
    },
    long: {
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