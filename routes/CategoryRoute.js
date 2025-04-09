const express = require("express");
const {
  read,
  create,
  update,
  Categorydelete,
} = require("../controller/CategoryController");
const router = express();

router.get("/", read);
router.get("/create", create);
router.get("/update", update);
router.get("/delete", Categorydelete);
module.exports = router;
