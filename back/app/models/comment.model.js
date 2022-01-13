module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
    },
    image: {
      type: Sequelize.DataTypes.STRING,
    },
  });

  return Comment;
};
