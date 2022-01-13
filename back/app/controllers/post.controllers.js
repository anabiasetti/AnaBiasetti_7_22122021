const db = require("../models");
const Post = db.post;
const Postlike = db.postlike;

exports.addPost = (req, res) => {
  // create post
  console.log(req.userId);
  Post.create({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    userId: req.userId,
  })

    .then((post) => {
      res.send({ message: "Post was published successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
