const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
      title: "My express App",
      message: "Welcome to the jungle",
    });
  });

module.exports = router;