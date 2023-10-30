const Joi = require("joi");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const courses = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "C/C++" },
  { id: 3, name: "Rust" },
  { id: 4, name: "NodeJS" },
];

const validateCourse = (course) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  let message = "<ul>";
  courses.forEach((value) => {
    message += `<li>${value.id} -> ${value.name}</li>`;
  });
  message += "</ul>";

  res.send(message);
});

app.get("/api/courses/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.query);

  const course = courses.find((value) => value.id === parseInt(req.params.id));

  if (!course) {
    res.status(404).send("The course with the given ID is not available.");
    return;
  }
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    res.send(400).send(error);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((value) => value.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Given id not found");
    return;
  }

  const { error } = validateCourse(req.body);

  if (error) {
    res.send(400).send(error);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const indexCourse = courses.findIndex(
    (value) => value.id === parseInt(req.params.id)
  );
  if (indexCourse === -1) {
    res.status(404).send("Given id not found");
    return;
  }

  const course = courses[indexCourse];
  courses.splice(indexCourse, 1);

  res.send(course);
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
