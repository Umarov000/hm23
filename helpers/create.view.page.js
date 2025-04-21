const path = require("path")
const createViewPage = (page) => path.join(__dirname, "../views", `${page}.ejs`)
module.exports= {
  createViewPage,
}