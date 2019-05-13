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
    },

    news: query => {
        return axios.post("/api/news", {
            query
        });
    },   
  
    likeButton: buttonData => {//method to call our 
        return axios.post("/api/items/button", buttonData);
    },
    
    Refresh: representativeData => {//method to call our 
        return axios.post("/api/items/buttons", representativeData);
    }   
}



//Here we have our routes for the APIs
//flow goes API>index.js => 
//This is what we reference