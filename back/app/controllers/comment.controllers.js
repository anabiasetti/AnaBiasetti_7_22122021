const db = require("../models");

// image Upload
const multer = require("multer");
const path = require("path");

//  main model
const Post = db.post;
const Comment = db.comment;

// functions

//1. Add Comment

exports.addComment = (req, res) => {
  const id = req.params.id;
  Comment.create({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    userId: req.userId,
  })

    .then((post) => {
      res.send({ message: "Comment was created successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// 2.Delete comment by id

exports.deleteComment = (req, res) => {
  let id = req.params.id;

  Comment.destroy({ where: { id: id } })

    .then((post) => {
      res.send({ message: "Comment is deleted !" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
