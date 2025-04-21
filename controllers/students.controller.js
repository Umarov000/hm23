const { createViewPage } = require("../helpers/create.view.page");

const getStudents = (req, res) => {
  res.render(createViewPage("students"), { title: "Students" });
};

module.exports = {
  getStudents,
};
