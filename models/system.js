module.exports = function (sequelize, DataTypes) {
    const System = sequelize.define("System", {
      name: DataTypes.STRING,
    });
  
    System.associate = function (models) {
      System.belongsToMany(models.Game, {through: "GameSystem"});
    };
  
    return System;
  };
  