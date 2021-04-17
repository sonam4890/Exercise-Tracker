const express = require("express");
const router = new express.Router();
const User = require("../models/user.model");

// Get All Users by GET request---------- .sort({ given property: 1 }) it is used to sort the data based on given property
router.route("/").get((req, res) => {
  User.find()
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Create User by POST request
router.route("/add").post((req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(`User added!`);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Get Individual User by Get request

router.route("/:id").get(async (req, res) => {
  try {
    const _id = req.params.id;
    const getUser = await User.findById(_id);
    res.status(200).send(getUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.route("/update/:id").patch(async (req, res) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
  // try {
  //   const _id = req.params.id;
  //   const getStudent = await Student.findByIdAndUpdate(_id, req.body, {
  //     new: true,
  //   });
  //   res.status(200).send(getStudent);
  // } catch (err) {
  //   res.status(500).send(err);
  // }
});

router.route("/:id").delete(async (req, res) => {
  try {
    const _id = req.params.id;
    const getUser = await User.findByIdAndRemove(_id);
    res.status(200).send("User deleted!");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
