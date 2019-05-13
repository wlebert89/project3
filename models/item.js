var mongoose = require("mongoose");
var Schema = mongoose.Schema 

//create schema 
const ItemSchema = new Schema({

    buttonLike: {
        type: Number,
        required: true,
        default: 0

    },
    buttonDislike: {
        type: Number,
        required: true,
        default: 0
    },
    representativeName: {
        type: String,
        required: true,
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);