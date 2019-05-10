const router = require("express").Router();
const axios = require("axios");

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
        baseURL: "https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=Warren",
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

// fetch("https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=Warren", {
//     headers: {
//       //confirmed this url and key in Postman
//       "X-API-Key": "P7tVdzc7MzKiD6JU1DDfadW9kSCbxJU8Tj03yK8w"
//       // "Content-Type": "application/x-www-form-urlencoded",
//     } //
//   })
//     .then(entireResponse => entireResponse.json())
//     .then(data => {
//         this.setState({
//             items: data
//           }); 
//           if(this.state.items.results[0].candidate.id){
//               var thisId = this.state.items.results[0].candidate.id
//           } else {console.log("Id unavailble")}
          
    

    
//     fetch("https://api.propublica.org/campaign-finance/v1/2016/candidates/" + thisId + ".json", {
//         headers: {
//           //confirmed this url and key in Postman
//           "X-API-Key": "P7tVdzc7MzKiD6JU1DDfadW9kSCbxJU8Tj03yK8w"
//           // "Content-Type": "application/x-www-form-urlencoded",
//         } //
//       })
//         .then(entireResponse => entireResponse.json())
//         .then(data => {
//             this.setState({
//                 items: data
//               }); 
//               console.log(this.state.items);
//         });} 
//     )};
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

module.exports = router;