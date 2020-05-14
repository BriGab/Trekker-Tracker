const db = require("../models");
const passport = require("../config/passport")

module.exports= function(app) {
    app.post("/api/signup", function(req,res) {
        db.User.Create(req.body)
        .then(function(dbUser){
            res.json(dbUser)
        })
        .catch(function(err) {
            res.json(err)
        })
    })

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        console.log(req.body)
        res.json(req.body)
    })
}