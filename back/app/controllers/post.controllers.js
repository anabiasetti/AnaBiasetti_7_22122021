const db = require("../models");

// image Upload
const multer = require("multer");
const path = require("path");
const fs = require("fs");
// create main Model
const Post = db.post;
const Comment = db.comment;
const Postlike = db.postlike;
// create post
exports.addPost = (req, res) => {
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
// 2. get all posts
exports.getAllPosts = (req, res) => {
  Post.findAll({})

    .then((post) => {
      res.send({ message: "All Posts where found successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// 3. update Post

exports.updatePost = (req, res) => {
  let id = req.params.id;

  Post.update(req.body, { where: { id: id } })

    .then((post) => {
      res.send({ message: "The Post was updated successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//4. delete post by id

exports.deletePost = (req, res) => {
  let id = req.params.id;

  Product.destroy({ where: { id: id } })

    .then((post) => {
      res.send({ message: "Post is deleted !" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// 5. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
exports.upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");
