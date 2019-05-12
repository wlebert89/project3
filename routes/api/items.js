const express = require('express');
const router = express.Router();

//The model in the db that we will interact with
var Item = require('../../models/Item');

//CREATE
// watch at 28:00 for tutorial
// https://www.youtube.com/watch?v=5yTazHkDR4o

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
        //doesnt need date even though its in the model

    })
//save the item being posted and return it in json 
    newItem.save().then(item => res.json(item));
});

//READ
//these are the parts that interacts with mongo
//get route
router.get('/', (req, res) => {
    Item.find()
    .then(items => res.json(items))
});


//DELETE
//needs item Id to delete it 
//video tutorial at 34:00
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json("item deleted")))
    .catch(err => res.status(404).json("Not found"));
    })

module.exports = router;

