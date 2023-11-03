const Joi = require("joi");
const express = require("express");
const pug = require("pug");

// Middlewares
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

// Enable middleware JSON -> transform JSON into Javascript Objects
app.use(express.json());
app.use(morgan("tiny"));

app.set("view engine", "pug");
app.set("views", "./views");

const movieIndex = {
  genres: [
    {
      id: 1,
      available: 6,
      name: "Horror",
    },
    {
      id: 2,
      available: 10,
      name: "Drama",
    },
    {
      id: 3,
      available: 13,
      name: "Comedy",
    },
    {
      id: 4,
      available: 10,
      name: "Romance",
    },
    {
      id: 5,
      available: 8,
      name: "Science Fiction",
    },
  ],
};

app.get("/", (req, res) => {
  res.render("index", {
    title: "My express App",
    message: "Welcome to the jungle",
  });
});

app.get("/api/genres", (req, res) => {
  let html = "<ul>";

  movieIndex.genres.forEach((element) => {
    html += `<li>${element.name}</li>`;
  });

  html += "</ul>";

  res.send(html);
});

app.get("/api/genres/:genre", (req, res) => {
  const genre = existsGenre(req.params.genre);

  if (!genre) {
    console.log(`${req.params.genre} not found`);
    res.status(404).send("Genre not found");
    return;
  }

  res.send(genre);
});

app.post("/api/genres/", (req, res) => {
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

app.put("/api/genres/:genre", (req, res) => {
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

app.delete("/api/genres/:id", (req, res) => {
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
