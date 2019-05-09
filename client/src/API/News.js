import Axios from 'axios';

export default Axios.create({
    baseURL: "https://newsapi.org/",
    headers: {
        "X-API-Key": "3dbaa769c45946c8a7ef2c22f8a7fc01"
    }
})