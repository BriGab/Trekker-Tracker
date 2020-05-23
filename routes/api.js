const { User, Hike } = require("../models");
const passport = require("../config/passport")

module.exports= function(app) {

    app.post("/api/signup", function(req,res) {
        console.log(req.body)
        User.create(req.body)
        .then(function(dbUser){
            console.log("got here")
            res.json(dbUser)
        })
        .catch(function(err) {
            res.json(err)
        })
    })

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        console.log("got here on the login")
        console.log(req.user)
        res.json(req.user)
    })


}