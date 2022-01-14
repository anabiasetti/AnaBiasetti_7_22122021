const express = require("express");
const router = express.Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/comment.controllers");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});

router.post("/", [authJwt.verifyToken], controller.addComment);
router.delete("/:id", [authJwt.verifyToken], controller.deleteComment);

module.exports = router;
