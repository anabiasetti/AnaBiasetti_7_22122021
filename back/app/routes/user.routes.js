const res = require("express/lib/response");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("It's user route");
});

module.exports = router;
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controllers");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/all", controller.allAccess);

  app.get("/api/user", [authJwt.verifyToken], controller.userBoard);

  app.get("/api/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
};
