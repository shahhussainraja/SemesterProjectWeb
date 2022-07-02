const express = require("express");
let router = express.Router();

//modelschema
//curly bracket use when file export more then 1 module and parameter in sequence
const { Course  } = require("../../models/Course");
let validateCourse = require("../../middlewares/validateCourse");
let  auth = require("../../middlewares/auth");
let  admin = require("../../middlewares/admin");

router.get("/", (req, res) => {
  res.send("<h1>Server is Running </h1>");
  // res.render("../views/index");
});

//now lo
router.post("/post",validateCourse,async (req, res) => {
  try {
    let data = req.body;
    const course = new Course({
      courseName:data.courseName, 
      instructorName:data.instructorName,
      link:data.link,
      description: data.description
    });
    const result = await Course(course.save());

    res.send(result);
    console.log(result);
  } catch (err) {
    console.log("error " + err.message);
    res.status(400).send(err.message);
  }
});

router.get("/getdata",async (req, res) => {
  try {
    const data = await Course.find();
    if (!data) return res.status(400).send("Data not found In dataBase");
    // data.splice(1, 1);
    res.send(data);
  } catch (err) {
    console.log("Error " + err.message);
  }
});


module.exports = router;
