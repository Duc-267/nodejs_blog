function NewsController() {
  // [GET] /news
  this.index = function (req, res) {
    res.render("news");
  };

  // [GET] /news:slug
  this.show = function (req, res) {
    res.send("<h1> news show </h1>");
  };
}

module.exports = new NewsController();
