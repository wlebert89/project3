const express = require("express");
const router = express.Router();

//Item model
var Item = require('./models/item');

//get all
router.get('/', (req, res) => {
    Item.find()
    .then(item => res.json(item))
});

module.export = router;