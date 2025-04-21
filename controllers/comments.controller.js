const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create.view.page");


const getComments = async (req, res) => {
  try {
    const commentData = await axios(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const comments = commentData.data;
    res.render(createViewPage("comments"), { title: "Comments", comments });
  } catch (error) {
    console.log(error);
    res.send({ message: "Yuklashda xatolik" });
  }
};


const getCommentById = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );
    res.render(createViewPage("comment"), { title: "Comment", comment: data });
  } catch (error) {
    console.log(error);
    res.send({ message: "Yuklashda xatolik" });
  }
};


const getAddComment = (req, res) => {
  try {
    res.render(createViewPage("add-comment"), { title: "Comment" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda xatolik" });
  }
};


const postAddComment = async (req, res) => {
  try {
    const { postId, name, email, body } = req.body;
    const commentData = await axios.post(
      "https://jsonplaceholder.typicode.com/comments",
      {
        postId,
        name,
        email,
        body,
      }
    );
    const comment = commentData.data;
    res.render(createViewPage("comment"), {
      title: "Comment",
      comment,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda xatolik" });
  }
};


const getEditCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const commentData = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    const comment = commentData.data;

    res.render(createViewPage("edit-comment"), {
      title: "Kommentni tahrirlash",
      comment,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Kommentni yuklashda xatolik" });
  }
};


const putEditCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { postId, name, email, body } = req.body;

    const updatedComment = await axios.put(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        postId,
        name,
        email,
        body,
      }
    );

    const comment = updatedComment.data;

    res.render(createViewPage("comment"), {
      title: "Komment yangilandi",
      comment,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Kommentni yangilashda xatolik" });
  }
};


const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
    res.redirect("/comments");
  } catch (error) {
    console.log(error);
    res.send({ message: "Kommentni o‘chirishda xatolik" });
  }
};

module.exports = {
  getComments,
  getCommentById,
  getAddComment,
  postAddComment,
  getEditCommentById,
  putEditCommentById,
  deleteCommentById,
};
