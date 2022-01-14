const express = require("express");
const router = express.Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/post.controllers");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});

router.post("/", [authJwt.verifyToken], controller.addPost);
router.post("/:id", [authJwt.verifyToken], controller.upload);
router.get("/", [authJwt.verifyToken], controller.getAllPosts);
router.put("/:id", [authJwt.verifyToken], controller.updatePost);
router.delete("/:id", [authJwt.verifyToken], controller.deletePost);

//app.post("/api/post/:id/like", [authJwt.verifyToken], controller.setLike);

module.exports = router;
