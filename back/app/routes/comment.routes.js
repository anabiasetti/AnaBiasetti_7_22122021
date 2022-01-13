const { authJwt } = require("../middleware");
const controller = require("../controllers/comment.controllers");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/post/:id/comment", [authJwt.verifyToken], controller.addComment);
};
