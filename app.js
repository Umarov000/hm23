const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { createViewPage } = require("./helpers/create.view.page");




const teacherRoute = require("./routes/teacher.routes");
const studentsRoute = require("./routes/students.routes");
const groupsRoute = require("./routes/groups.routes");
const postsRoute = require("./routes/posts.routes");
const commentsRoute = require("./routes/comments.routes");
const aboutRoute = require("./routes/about.routes");

require("dotenv").config();
const PORT = process.env.PORT || 3333;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("styles"));
app.use(express.static("images"));
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.render(createViewPage("index"), { title: "Main" });
});

app.use(teacherRoute);

app.use(studentsRoute);

app.use(groupsRoute);

app.use(postsRoute);

app.use(commentsRoute);

app.use(aboutRoute);

app.use((req, res) => {
  
  res.render(createViewPage(404), { title: "404" }); 
});















app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
