//PORT NO
const PORT = 4000;

const express = require("express");
const app = express();

const Task = require("./models/taskList");
const database = require("./config/mongoose");

//SETTING EJS AS VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", "./views");

//USED ARRAY OF OBJECTS FOR DATA BEFORE USING DATABASE FOR STORING DATA
/*tasks = [
    {
        description:"abcd",
        dueDate: '2017',
        category: 'personal'
    },
    {
        description:"abcdefg",
        dueDate: '2019',
        category: 'personal'
    }
]
*/

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//HOME PAGE
app.get("/", function (req, res) {
  //FOR RENDERING TODO LIST
  Task.find({}, function (err, task) {
    if (err) {
      console.log("Error tasks");
      return;
    }
    return res.render("app", { Tasks: task });
  });
});

//ADDING A NEW TASK TO THE LIST
app.post("/addTask", function (req, res) {
  Task.create(
    {
      description: req.body.description,
      dueDate: req.body.dueDate,
      category: req.body.category,
    },
    function (err, newTask) {
      if (err) {
        console.log("Error in adding task: " + err.message);
        return;
      }
      console.log(req.body);
      return res.redirect("back");
    }
  );
});

//DELETING TASK FROM THE LIST
app.get('/deleteTask',function(req, res) {

  Task.findByIdAndDelete(req.query.id, function(err){
    if(err){
      console.log("Error in deleting task: " + err.message);
      return;
    }
    return res.redirect("back");
  })
})

  app.listen(PORT, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("listening on port", PORT);
  })

