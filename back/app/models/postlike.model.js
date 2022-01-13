module.exports = (sequelize, Sequelize) => {
  const Postlike = sequelize.define("postlike", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isDislike: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return Postlike;
};
