const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: {
        type: String,
        default: null
    },
    photoURL: {
        type: String,
        default: null
    },
    phoneNumber: {
        type: String,
        default: null
    },
    rating: {
        type: Number,
    },
    displayName: {
        type: String,
    },
    email: {
        type: String
    },
    rating: {
        type: String,
        default: null
    },
    lat: {
        type: String,
        default: null
    },
    lng: {
        type: String,
        default: null
    },
    onSellProducts: [{
        type: Schema.Types.ObjectId, 
        ref:'Product',
        default: []}
    ],
    purchasedProducts: [{
        type: Schema.Types.ObjectId, 
        ref:'Product',
        default: []}
    ]
});

module.exports = mongoose.model('user', userSchema);