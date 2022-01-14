const db = require("../models");
const User = db.user;
// 1. get all users
exports.getAllUsers = (req, res) => {
  User.findAll({})
    .then((user) => {
      res.send({ message: "All Users where found successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
//2. delete user by id

exports.deleteUser = (req, res) => {
  let id = req.params.id;

  User.destroy({ where: { id: id } })

    .then((user) => {
      res.send({ message: "User is deleted !" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
