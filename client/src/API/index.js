import axios from "axios";

export default {
    openState: query => {
        return axios.post("/api/openstate", {
            query
        });
    },

    proPublica: query => {
        return axios.post("/api/propublica", {
            query
        });
    },

    googleCivic: query => {
        return axios.post("/api/googlecivic", {
            query
        });
    }
}