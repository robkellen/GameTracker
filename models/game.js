module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define("Game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

    genre: {
      type: DataTypes.STRING,
      // references: {
      //   model: GameGenre,
      //   key: "id",
      // },
    },
    publisher: {
      type: DataTypes.STRING,
    },

    system: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },

    wishlist: {
      type: DataTypes.BOOLEAN,
      default: true,
    },

    playing: {
      type: DataTypes.BOOLEAN,
      default: false,
    },

    beaten: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  });

  Game.associate = function(models) {
    Game.belongsToMany(models.Genre, {
      through: "GameGenre",
    });
    Game.belongsToMany(models.System, {
      through: "GameSystem",
    });
    Game.belongsTo(models.User, {
      foreignKey: {},
    });
  };

  return Game;
};
