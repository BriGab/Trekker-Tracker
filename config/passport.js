const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models")


passport.use(new LocalStrategy(

    {
        emailField: "email"
    },
    function(email, password, done) {
        User.findOne({
            where:{
                email: email
            }
        }).then(function(dbUser){
            if(!dbUser) {
                return done(null, flase, {
                    message: "Incorrect email."
                });
            }
            else if (!dbUser.validPassword(password)){
                return done(null, false, {
                    message: "Incorrect Password"
                });
            }

            return done(null, dbUser)
        })
    }
))


passport.serializeUser(function(user, cb){
    cb(null, user)
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

module.exports = passport;