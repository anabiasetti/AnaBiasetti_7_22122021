const { authJwt } = require("../middleware");
const controller = require("../controllers/post.controllers");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/post", [authJwt.verifyToken], controller.addPost);
  //app.post("/api/post/:id/like", [authJwt.verifyToken], controller.setLike);
};
