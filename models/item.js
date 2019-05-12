var mongoose = require("mongoose");
var Schema = mongoose.Schema 

//create schema 
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
date: {
    type:Date,
    default: Date.now
}
});

module.exports = Item = mongoose.model('item', ItemSchema);