const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const { deleteTodo} =require("../controllers/deleteTodo");
const {updateTodo} =require("../controllers/updatteTodo");
const {getTodo, getTodoById} =require("../controllers/getTodo");

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodoById",getTodoById)
router.put("/updateTodo",updateTodo);
router.delete("/deleteTodo",deleteTodo);

module.exports= router;