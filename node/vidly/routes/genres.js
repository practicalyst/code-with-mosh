const Joi = require('joi');
const express = require("express");
const router = express.Router();

const movieIndex = require('../data/movieIndex');

router.get("/", (req, res) => {
  let html = "<ul>";

  movieIndex.genres.forEach((element) => {
    html += `<li>${element.name}</li>`;
  });

  html += "</ul>";

  res.send(html);
});

router.get("/:genre", (req, res) => {
  const genre = existsGenre(req.params.genre);

  if (!genre) {
    console.log(`${req.params.genre} not found`);
    res.status(404).send("Genre not found");
    return;
  }

  res.send(genre);
});

router.post("/", (req, res) => {
  const { genres } = movieIndex;

  const exists = existsGenre(req.body.name);

  if (exists) return res.send(`${req.body.name} already exists`);

  const { error } = validateGenre(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send(`Error! ${error}`);
  }

  const obj = {
    id: genres.length + 1,
    available: req.body.available,
    name: req.body.name,
  };

  genres.push(obj);

  res.send(obj);
});

router.put("/:genre", (req, res) => {
  const genre = existsGenre(req.params.genre);

  if (!genre) {
    console.log(`${req.params.genre} not found`);
    res.status(404).send("Genre not found");
    return;
  }

  const obj = {
    id: genre.id,
    name: genre.name,
    available: req.body.available,
  };

  const { genres } = movieIndex;
  const index = genres.findIndex((obj) => {
    return obj.id === genre.id;
  });

  movieIndex.genres[index] = obj;
  return res.status(201).send("Successul update!");
});

router.delete("/:id", (req, res) => {
  const { genres } = movieIndex;
  const index = genres.findIndex((obj) => {
    return parseInt(obj.id) === parseInt(req.params.id);
  });

  if (index === -1) return res.status(404).send("ID not found!");

  const deleted = genres[index];
  movieIndex.genres.splice(index, 1);

  return res.send(deleted);
});

// Hoisting
const existsGenre = (searchedGenre) => {
  const { genres } = movieIndex;
  const exist = genres.find((genre) => {
    console.log("genre", genre);
    console.log("searchedGenre", searchedGenre);

    genre = genre.name.replace(" ", "").toLowerCase();
    searchedGenre = searchedGenre.toLowerCase();

    return genre === searchedGenre;
  });

  return exist;
};

const validateGenre = (obj) => {
  const schema = Joi.object({
    available: Joi.number().required(),
    name: Joi.string().min(3).required(),
  });

  return schema.validate(obj);
};

module.exports = router;
