const express = require("express");
const {
  getcrudform,
  createcontact,
  editData,
  updateData,
  deleteData,
} = require("../Controllers/crud.controller");
const router = express.Router();

router.get("/", getcrudform);
router.post("/create", createcontact);
router.get("/edit/:id", editData);
router.post("/update/:id", updateData);
router.get("/delete/:id", deleteData);

module.exports = router;
