const express = require('express');
const router = express.Router();

//The model in the db that we will interact with
var Item = require('../../models/Item');


router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item));
});


router.post('/button', (req, res) => {
    Item.findOne({
        representativeName: req.body.name
    })
    //save the item being posted and return it in json 
    .then(result => {
        // req.body.buttonType = "buttonLike" || "buttonDislike"
        const buttonType = req.body.buttonType;
        console.log("ted info: ", result)

        Item.where({ representativeName: req.body.name }).update({
            [buttonType]: result[buttonType] + 1
        }).then(response => {
            console.log("Update Response: ", response)
            result[buttonType] = result[buttonType] + 1
            res.json(result);
        });
    });
});

router.post('/buttons', (req, res) => {
    Item.findOne({
        representativeName: req.body.name
    }).then(result => {
        res.json(result);
    })
})




router.get('/', (req, res) => {
    Item.find()
    .then(items => res.json(items))
});


//DELETE
//needs item Id to delete it 
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json("item deleted")))
    .catch(err => res.status(404).json("Not found"));
    })

module.exports = router;

