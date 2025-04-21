const { getTeachers, getTeacherById, getAddTeacher, postAddTeacher, getEditTeacherById, putEditTeacherById, deleteTeacherById} = require("../controllers/teacher.controller");

const router = require("express").Router()


router.get("/teachers", getTeachers);
router.get("/teacher/:teacherId", getTeacherById);
router.get("/add-teacher", getAddTeacher);
router.post("/add-teacher", postAddTeacher);
router.get("/edit-teacher/:id", getEditTeacherById);
router.put("/edit-teacher/:id", putEditTeacherById);
router.delete("/teacher/:id", deleteTeacherById);

module.exports = router