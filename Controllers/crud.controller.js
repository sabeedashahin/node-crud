const Usermodel = require("../Models/Crud.model");
var session = require("express-session");
const url = require("url");

const getcrudform = async (req, res) => {
  const base_url = process.env.BASE_URL;
  var msg = "";
  if (req.session.message) {
    msg = req.session.message;
  }

  try {
    // Fetch users from the database
    const users = await Usermodel.find();
    res.render("crudform", { base_url, msg, users });
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
};

//create
const createcontact = async (req, res) => {
  const { name, email, mobile } = req.body;
  console.log(name, email, mobile);
  const data = await Usermodel.create({ name, email, mobile });
  if (data) {
    req.session.message = "Data Added";
    res.redirect("back");
  }
};

//edit
const editData = async (req, res) => {
  const { id } = req.params;
  const base_url = process.env.BASE_URL;
  try {
    const editedData = await Usermodel.findById(id);
    res.render("editform", { base_url, editedData });
  } catch (error) {
    res.status(500).send("Error fetching data for edit");
  }
};

//update
const updateData = async (req, res) => {
  const { id } = req.params;
  const { name, email, mobile } = req.body;
  try {
    await Usermodel.findByIdAndUpdate(id, { name, email, mobile });
    req.session.message = "Data Updated";
    res.redirect("/crud/");
  } catch (error) {
    res.status(500).send("Error updating data");
  }
};

//delete
const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    await Usermodel.findByIdAndDelete(id);
    res.redirect("/crud/");
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

module.exports = {
  getcrudform,
  createcontact,
  editData,
  updateData,
  deleteData,
};
