const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.post = require("../models/post.model.js")(sequelize, Sequelize);
db.postlike = require("../models/postlike.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);

// one to many
db.user.hasMany(db.post, { as: "posts" });
db.post.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
// one to many
db.user.hasMany(db.postlike, { as: "postlikes" });
db.postlike.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
// one to many
db.post.hasMany(db.postlike, { as: "postlikes" });
db.postlike.belongsTo(db.post, {
  foreignKey: "postId",
  as: "post",
});

module.exports = db;
