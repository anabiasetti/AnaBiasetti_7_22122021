module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
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

  return Post;
};
