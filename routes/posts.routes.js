const { getPosts, getPostById, getAddPost, postAddPost, getEditPostById, putEditPostById, deletePostById } = require("../controllers/posts.controller");
const router = require("express").Router();

router.get("/posts", getPosts);
router.get("/post/:postId", getPostById);
router.get("/add-post", getAddPost);
router.post("/add-post", postAddPost);
router.get("/edit-post/:id", getEditPostById);
router.put("/edit-post/:id", putEditPostById);
router.delete("/post/:id", deletePostById);

module.exports = router;