const express = require("express");
const { sample } = require("../controller/TestController");
const router = express();

router.get("/", sample);
router.get("/home", (req, res) => {
  res.send("Hello World homeeee");
});
module.exports = router;
