const express = require("express");
const router = new express.Router();
const Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => {
      res.status(201).send(exercises);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.route("/add").post((req, res) => {
  // let exercise = new Exercise({
  //   username: req.body.username,
  //   description: req.body.description,
  //   duration: Number(req.body.duration),
  //   date: Date.parse(req.body.date),
  // });
  let exercise = new Exercise(req.body);
  exercise
    .save()
    .then(() => {
      res.status(201).send(`Exercise added!`);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      res.send(exercise);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("Exercise deleted!");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").patch((req, res) => {
  const _id = req.params.id;
  Exercise.findByIdAndUpdate(_id, req.body)
    .then((exercise) => {
      res.send(exercise);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
