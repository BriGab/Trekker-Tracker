const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        first: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 6
            }
        }
    });

    User.generateHash = function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // this equates the user.password with the hashed password
    const encryptPassword = function (user) {
        user.password = User.generateHash(user.password);
    };
    // this uses the beforeCreate function to encrypt the password entered by the user when they sign up into an encrypted version stored in the db
    User.beforeCreate(encryptPassword);


    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password)
    };


    User.associate = function(models) {
        User.hasMany(models.Hike, {
            onDelete: "cascade"
        })
    }

    return User;
}
