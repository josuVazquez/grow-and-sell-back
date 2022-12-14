const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    currency: {
        type: String,
    },
    images: [{
        type: String,
        default: ''
    }],
    productOwner: {
        type: Schema.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model('product', productSchema);