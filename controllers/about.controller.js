const { createViewPage } = require("../helpers/create.view.page");

const getAbout = (req, res) => {
  res.render(createViewPage("about"), { title: "About" });
};

module.exports = {
  getAbout,
};
