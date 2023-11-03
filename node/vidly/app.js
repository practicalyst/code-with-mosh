const Joi = require("joi");
const express = require("express");
const pug = require("pug");

const movieIndex = require('./data/movieIndex');

// Routes
const genresRoute = require("./routes/genres");
const indexRoute = require("./routes/index");

// Middlewares
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

// Enable middleware JSON -> transform JSON into Javascript Objects
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/genres", genresRoute);
app.use("/", indexRoute);

app.set("view engine", "pug");
app.set("views", "./views");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
