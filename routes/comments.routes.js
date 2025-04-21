const {
  getComments,
  getCommentById,
  getAddComment,
  postAddComment,
  getEditCommentById,
  putEditCommentById,
  deleteCommentById,
} = require("../controllers/comments.controller");

const router = require("express").Router();

router.get("/comments", getComments);
router.get("/comment/:commentId", getCommentById);
router.get("/add-comment", getAddComment);
router.post("/add-comment", postAddComment);
router.get("/edit-comment/:id", getEditCommentById);
router.put("/edit-comment/:id", putEditCommentById);
router.delete("/comment/:id", deleteCommentById);

module.exports = router;
