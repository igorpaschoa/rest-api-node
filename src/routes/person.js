let express = require("express");
let router = express.Router();

router.get("/person", (req, res) => {
  res.send("You hve requested a person");
});

module.exports = router;
