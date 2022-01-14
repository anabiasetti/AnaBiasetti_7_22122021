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
db.comment = require("../models/comment.model.js")(sequelize, Sequelize);

// one to many users & posts(one user can have many posts but one post can have just one user)
db.user.hasMany(db.post, { as: "posts" });
db.post.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
// one to many postliked & users(one user can have many post likeds but the post liked has just one user)
db.user.hasMany(db.postlike, { as: "postlikes" });
db.postlike.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
// one to many (one post can have many likes but one like or dislike can have just to one post)
db.post.hasMany(db.postlike, { as: "postlikes" });
db.postlike.belongsTo(db.post, {
  foreignKey: "postId",
  as: "post",
});
// one to many users & comments(one user can make many comments but one comment belongs to one user)
db.user.hasMany(db.comment, { as: "comments" });
db.comment.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

module.exports = db;
