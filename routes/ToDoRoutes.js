const {Router} = require("express");
const { getToDo, saveToDo, updateTodo, deleteToDo } = require("../controllers/ToDoControllers");

const router = Router();

router.get('/',getToDo);

router.post('/save',saveToDo)

router.post('/update',updateTodo)

router.post('/delete/:id',deleteToDo)



module.exports = router