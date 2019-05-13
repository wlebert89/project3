const router = require("express").Router();
const axios = require("axios");
const itemRoutes = require("./items.js");

router.route("/openstate").post((req, res) => {
    axios.create({
        baseURL: "https://openstates.org/",
        headers: {
            "X-API-Key": "1a2c6c72-7b8f-48be-8e94-d4e69c31b7a0"
        }
    })
    .get(req.body.query)
    .then(response => {
        console.log(response.data);
        res.json(response.data)
    });
})

router.route("/propublica").post((req, res) => {
    axios.create({
        baseURL: "https://api.propublica.org",
        headers: {
            "X-API-Key": "S7rXcvNNyKCQjMyHjzug6HChVXuoEYRtYGEBsEaF"
        }
    })
    .get(req.body.query)
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    });
});

router.route("/googlecivic").post((req, res) => {
    axios.create({
        baseURL: "https://www.googleapis.com/"
    })
    .get(req.body.query)
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    });
});

router.route("/news").post((req, res) => {
    axios.create({
        baseURL: "https://newsapi.org",
        headers: {
            "X-API-Key": "3dbaa769c45946c8a7ef2c22f8a7fc01"
        }
    })
    .get(req.body.query)
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    });
});


router.use("/items", itemRoutes);

module.exports = router;