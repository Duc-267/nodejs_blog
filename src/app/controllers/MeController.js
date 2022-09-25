const Course = require("../model/Course");

function MeController() {
    // [GET] me//stored-courses
    this.storedCourses = function (req, res, next) {
      Course.find({})
      .lean()
      .then(courses => res.render('me/stored-courses', { courses }))
      .catch(next)
    };
  }
  
  module.exports = new MeController();
  