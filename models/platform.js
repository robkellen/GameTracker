module.exports = function(sequelize, DataTypes) {
  const Platform = sequelize.define("Platform", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Platform.associate = function(models) {
    Platform.belongsToMany(models.Game, { through: "GamePlatform" });
  };
  return Platform;
};
