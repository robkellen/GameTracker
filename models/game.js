module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define("Game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    // genre: {
    //   type: DataTypes.ENUM,
    //   values: [
    //     "Action",
    //     "Adventure",
    //     "Fighting",
    //     "Platformer",
    //     "Racing",
    //     "RPG",
    //     "Shooter",
    //     "Sports",
    //     "Strategy",
    //     "Survival/Horror",
    //   ],
    // },
    publisher: {
      type: DataTypes.STRING,
    },
    systemPreference: {
      type: DataTypes.ENUM,
      values: [
        "Android",
        "iOS",
        "MacOS",
        "PC",
        "Nintendo Switch",
        "Nintendo Wii",
        "Nintendo WiiU",
        "Playstation 3",
        "Playstation 4",
        "Xbox ONE",
        "XBOX 360",
      ],
    },

    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 10,
      },
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
  };
  Game.associate = function(models) {
    Game.belongsToMany(models.System, {
      through: "GameSystem",
    });
  };

  Game.associate = function(models) {
    Game.belongsTo(models.User, {
      foreignKey: {
        // allowNull: false
      },
    });
  };
  return Game;
};
