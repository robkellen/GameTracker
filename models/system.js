module.exports = function(sequelize, DataTypes) {
  const System = sequelize.define("System", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  System.associate = function(models) {
    System.belongsToMany(models.Game, { through: "GameSystem" });
  };
  return System;
};
