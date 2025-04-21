const { createViewPage } = require("../helpers/create.view.page");

const getGroups = (req, res) => {
  res.render(createViewPage("groups"), { title: "Groups" });
};

module.exports = {
  getGroups,
};
