let express = require("express");
let router = express.Router();

router.get("/person", (req, res) => {
  if (req.query.name) {
    res.send(`The name of the person is ${req.query.name}`);
  } else {
    res.send("You have requested a person");
  }
});

router.get("/person/:name", (req, res) => {
  res.send(`The name of the person is ${req.params.name}`);
});

module.exports = router;
