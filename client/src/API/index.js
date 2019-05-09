import axios from "axios";

export default {
    getOpenStateData: query => {
        return axios.post("/api/openstate", {
            query
        })
    },

    getProPublicaData: query => {
        return axios.post("/api/propublica", {
            query
        })
    },
}