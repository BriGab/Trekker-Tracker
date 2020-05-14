
module.exports = function(sequelize, DataTypes) {
    const Hike = sequelize.define("Hike", {
        date: {
            type: DataTypes.DATEONLY,
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
            type: DataTypes.BLOB,
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