const mongoose = require("mongoose");
//CREATED SCHEMA FOR THE DATABASE
const taskSchema = new mongoose.Schema({
  description: {
    type: "string",
    required: true,
  },
  dueDate: {
    type: "string",
    required: true,
  },
  category: {
    type: "string",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

//EXPORTING THE SCHEMA
module.exports = Task;
