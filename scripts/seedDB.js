const mongoose = require("mongoose");
const Item = require("../models/item.js");

mongoose
.connect(process.env.MONGOD_URI || "mongodb://localhost/Test");

const RepSeed = [{
    buttonLike:0,
    buttonDislike:0,
    representativeName:"Ted Cruz"
   },
   {
    buttonLike:0,
    buttonDislike:0,
    representativeName:"Lloyd Doggett"
   },
];

Item
  .remove({})
  .then(() => Item.collection.insertMany(RepSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {``
    console.error(err);
    process.exit(1);
  });
 



