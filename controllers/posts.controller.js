const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create.view.page");

const getPosts = async (req, res) => {
  try {
    const userData = await axios("https://jsonplaceholder.typicode.com/posts");
    const posts = userData.data;
    res.render(createViewPage("posts"), { title: "Posts", posts });
  } catch (error) {
    console.log(error);
    res.send({ message: "Yuklashda xatolik" });
  }
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    res.render(createViewPage("post"), { title: "Posts", post: data });
  } catch (error) {
    console.log(error);
    res.send({ message: "Yuklashda xatolik" });
  }
};

const getAddPost = (req, res) => {
  try {
    res.render(createViewPage("add-post"), { title: "Post" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda xatolik" });
  }
};

const postAddPost = async (req, res) => {
  try {
    const { userId, title, body } = req.body;
    const userData = await axios.post(
      "https://jsonplaceholder.typicode.com/posts/",
      {
        userId,
        title,
        body,
      }
    );
    const post = userData.data;
    res.render(createViewPage("post"), {
      title: "Posts",
      post,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda xatolik" });
  }
};

const getEditPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = userData.data;

    res.render(createViewPage("edit-post"), {
      title: "Postni tahrirlash",
      post,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Postni yuklashda xatolik" });
  }
};

const putEditPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, title, body } = req.body;

    const updatedPost = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        userId,
        title,
        body,
      }
    );

    const post = updatedPost.data;

    res.render(createViewPage("post"), {
      title: "Post yangilandi",
      post,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Postni yangilashda xatolik" });
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    res.redirect("/posts"); 
  } catch (error) {
    console.log(error);
    res.send({ message: "Postni o‘chirishda xatolik" });
  }
};

module.exports = {
  getPosts,
  getPostById,
  getAddPost,
  postAddPost,
  getEditPostById,
  putEditPostById,
  deletePostById,
};
