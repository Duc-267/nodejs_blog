const slugify = require( 'slugify');
const Course = require("../model/Course");

function CourseController() {
  // [GET] /courses/:slug
  this.show = function (req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => res.render("courses/show", { course }))
      .catch(next);
  };

  // [GET] /courses/create
  this.create = function (req, res) {
    res.render("courses/create");
  };

  // [POST] /courses/store
  this.store = function (req, res) {
    const formData = req.body;
    formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/13/13.png`;
    formData.slug = slugify(formData.name);
    const newCourse = new Course(formData);
    newCourse.save()
    .then(() => res.redirect('/'))
  };
}

module.exports = new CourseController();
