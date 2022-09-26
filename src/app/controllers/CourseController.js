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

  // [GET] /courses/:id/edit
  this.edit = function (req, res, next) {
    console.log(req.params.id);
    Course.findById(req.params.id)  
    .lean()
    .then(course => res.render('courses/edit', { course }))
    .catch(next)
  };

  // [PUT] /courses/:id
  this.update = function (req, res) {
    Course.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.redirect('../'))
  };

  // [DELETE] /courses/:id
  this.delete = function (req, res, next) {
    Course.deleteOne({ _id: req.params.id })
    .then(() => res.redirect('back'))
    .catch(next)
  };
}

module.exports = new CourseController();
