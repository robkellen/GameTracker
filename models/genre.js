module.exports = function (sequelize, DataTypes) {
    const Genre = sequelize.define("Genre", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Genre.associate = function (models) {
        System.belongsToMany(models.Game, {through: "GameSystem"});
    };
    return Genre;
};



