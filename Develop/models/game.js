//Creating Game model
module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define("Game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.ENUM,
      values: ['Action', 'Adventure', 'Fighting', 'Racing', 'Shooter', 'Sports', 'Strategy', 'Survival/Horror'],
    },
    publisher: {
      type: DataTypes.STRING,
    },
    systemPreference: {
      type: DataTypes.ENUM,
      values: ['Android', 'iOS', 'macOS', 'PC', 'Nintendo Switch', 'Nintendo Wii', 'Nintendo WiiU', 'Playstation 3', 'Playstation 4', 'Xbox ONE', 'XBOX 360']
    },
    personalRating: {
      type: DataTypes.INTEGER( {
        isBetween: (1, 10),
      }),
    }
  });
  return Game;
};
