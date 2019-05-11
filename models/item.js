var mongoose = require("mongoose");
var Schema = mongoose.Schema 

//create schema 
var lettersSchema = mongoose.Schema({
    senatorName: String,
    senotorState: String,
    senotorZip: String,
    senderName: String,
    senderState: String,
    senderZip: String,
    letterText: String,
})

module.exports = mongoose.model('Letter', lettersSchema);