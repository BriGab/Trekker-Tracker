const express = require ("express");
const session = require ("express-session");
const passport = require("./config/passport")

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


require("./routes/api")(app);
require("./routes/html")(app);

db.sequelize.sync({ /*force: true*/ }).then(function() {
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT)
     })
})