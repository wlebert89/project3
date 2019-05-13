const express = require("express");
const routes = require("./routes");
const app = express();

//////////////////////////////////////////////////////////////////
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


//Bodyparser middleware
app.use(bodyParser.json());

//DB config 
const db = process.env.MONGODB_URI || "mongodb://localhost/nictest";

//connect to Mongo
mongoose
.connect(db)
 .then(() => {
     console.log('Mongoose Connected on ' + PORT);
 })
 .catch(err => console.log(err));

 //Use routes
 //"when /api/items is called do whatever "items" says"
 const items = require("./routes/api/items")
 app.use('/api/items', items);

const PORT = process.env.PORT || 3001;



///////////////////////////////////////////////////////////////////////////////
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);


app.listen(PORT, function () {
    console.log("🌎  ==> API Server now listening on port " + PORT);
});


