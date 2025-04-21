const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create.view.page");

const getTeachers = async (req, res) => {
  try {
    const userData = await axios("https://jsonplaceholder.typicode.com/users");
    const teachers = userData.data;
    res.render(createViewPage("teachers"), { title: "Teachers", teachers });
  } catch (error) {
    console.log(error);
    res.send({ message: "Yuklashda xatolik" });
  }
};

const getTeacherById = async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${teacherId}`
    );
    res.render(createViewPage("teacher"), { title: "Teachers", teacher: data });
  } catch (error) {
    console.log(error);
    res.send({ message: "Yuklashda xatolik" });
  }
};

const getAddTeacher = (req, res) => {
  try {
    res.render(createViewPage("add-teacher"), { title: "Teacher" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda xatolik" });
  }
};

const postAddTeacher = async (req, res) => {
  try {
    const { username, email, phone } = req.body;
    const userData = await axios.post(
      "https://jsonplaceholder.typicode.com/users/",
      {
        username,
        email,
        phone,
      }
    );
    const teacher = userData.data;
    res.render(createViewPage("teacher"), {
      title: "Teachers",
      teacher,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverda xatolik" });
  }
};

const getEditTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    const teacher = userData.data;
    res.render(createViewPage("edit-teacher"), {
      title: "Teachers",
      teacher,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverdan xatolik" });
  }
};

const putEditTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, email, phone } = req.body;
    const userData = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        name,
        username,
        email,
        phone,
      }
    );

    const teacher = userData.data;
    res.render(createViewPage("teacher"), { title: "Teachers", teacher });
  } catch (error) {
    console.log(error);
    res.send({ message: "Serverdan xatolik" });
  }
};

const deleteTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    res.send({ message: "O‘qituvchi o‘chirildi" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Serverda xatolik" });
  }
};

module.exports = {
  getTeachers,
  getTeacherById,
  getAddTeacher,
  postAddTeacher,
  getEditTeacherById,
  putEditTeacherById,
  deleteTeacherById,
};
