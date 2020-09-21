module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define("Game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

    genre: {
      type: DataTypes.STRING,
      unique: false,
    },
    
    publisher: {
      type: DataTypes.STRING,
    },

    system: {
      type: DataTypes.STRING,
      unique: false,
    },
    
  

    rating: {
      type: DataTypes.INTEGER,
     
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
    Game.belongsTo(models.User, {
      foreignKey: {
        // allowNull: false
      },
    });
  };
  return Game;
};
