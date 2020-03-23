const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
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

    User.associate = function(models) {
        User.hasMany(models.Hike, {
            onDelete: "cascade"
        })
    }
    
    User.protoype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password)
    };

    User.addHook("beforeCreate", function(user){
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    });


    return User;
}

