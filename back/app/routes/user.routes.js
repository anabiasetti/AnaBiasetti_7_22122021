const express = require("express");
const router = express.Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controllers");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});
router.get("/", [authJwt.verifyToken], controller.getAllUsers);
router.delete("/:id", [authJwt.verifyToken], controller.deleteUser);

module.exports = router;
