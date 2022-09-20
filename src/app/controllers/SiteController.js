function SiteController() {
  // [GET] /
  this.index = function (req, res) {
    res.render("home");
  };

  // [GET] /search
  this.search = function (req, res) {
    res.render("search");
  };
}

module.exports = new SiteController();
