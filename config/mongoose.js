const mongoose = require("mongoose");

//CONNECTING TO THE DATABASE
mongoose.connect("mongodb://localhost:27017/taskDB");

const db = mongoose.connection;

//IF ERROR OCCURS
db.on("error", console.error.bind(console, "error in database"));

//ON SETTING UP CONNECTION SUCCESSFULLY
db.once("open", function () {
  console.log("Successfully connected to database");
});

//EXPORTING DATABASE
module.exports = db;
