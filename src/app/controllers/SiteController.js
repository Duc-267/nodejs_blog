const Course = require("../model/Course");

function SiteController() {
  // [GET] /
  this.index = function (req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => res.render("home", { courses }))
      .catch(next);
  };

  // [GET] /search
  this.search = function (req, res) {
    res.render("search");
  };
}

module.exports = new SiteController();
