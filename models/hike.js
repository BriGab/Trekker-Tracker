
module.exports = function(sequelize, DataTypes) {
    const Hike = sequelize.define("Hike", {
        date: {
            type: DataTypes.Date,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trailName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photo :{
            type: DataTypes.blob,
            allowNull: true
        },
        review: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Hike.associate = function(models) {
        Hike.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Hike;
}