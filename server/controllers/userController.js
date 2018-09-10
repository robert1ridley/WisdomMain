const bcrypt = require('bcrypt');
const User = require("../models/databaseModels/User");
const passwordEncryption = require('../helpers/index');

exports.listAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.createNewUser = (req, res) => {
  let newUser = new User();
  newUser.userName = req.body.userName;
  newUser.passwordHash = passwordEncryption.encryptPassword(req.body.password);
  newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(user);
  });
};

exports.readUser = (req, body) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(user);
    }
  );
};

exports.deleteUser = (req, res) => {
  User.remove({ _id: req.params.userid }, (err, user) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "User successfully deleted" });
  });
};