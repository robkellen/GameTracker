const GameGenre = require("../models");
const GameSystem = require("../models");

module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define("Game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

    publisher: {
      type: DataTypes.STRING,
    },

    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 10,
      },
    },

    genre: {
      type: DataTypes.STRING,
      // references: {
      //   model: GameGenre,
      //   key: "id"
      // }
    },

    system: {
      type: DataTypes.STRING,
      // references: {
      //   model: GameSystem,
      //   key: "id"
      // }
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

  // Game.associate = function(models) {
  //   Game.belongsToMany(models.Genre, {
  //     through: "GameGenre",
  //   });
  // };
  // Game.associate = function(models) {
  //   Game.belongsToMany(models.System, {
  //     through: "GameSystem",
  //   });
  //   console.log(Systems);
  // };

  Game.associate = function(models) {
    Game.belongsTo(models.User, {
      foreignKey: {
        // allowNull: false
      },
    });
  };
  return Game;
};
