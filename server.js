const express = require ("express");
const session = require ("express-session");

const passort = require("./config/passport")

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./model")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT)
    })
})