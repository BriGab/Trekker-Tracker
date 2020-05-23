import axios from "axios"; 

export default {

    signUp: function(user) {
        console.log(user)
        return axios.post("/api/signup", user)
    },

    login: function(user) {
        console.log(user)
        return axios.post("/api/login", user)
    }


}