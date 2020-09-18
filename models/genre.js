//create table for genre to export and associate the key/value in the Games table

module.exports = function(sequelize, dataTypes) {
  const Genre = sequelize.define("Genre", {
    name: {
      type: dataTypes.STRING,
    },
  });

  Genre.associate = function(models) {
    Genre.belongsToMany(models.Game, { through: "GameGenre" });
  };

  return Genre;
};
