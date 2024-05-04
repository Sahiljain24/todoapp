const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const { deleteTodo} =require("../controllers/deleteTodo");
const {updateTodo} =require("../controllers/updateTodo");
const {getTodo, getTodoById} =require("../controllers/getTodo");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
module.exports= router;