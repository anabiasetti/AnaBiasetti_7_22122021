const res = require("express/lib/response");

const router = require("express").Router();

//REGISTER
router.post("/register", (req, res) => {
  res.send("It's auth route");
});

module.exports = router;
