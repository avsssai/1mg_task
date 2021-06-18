import express from "express";
import { getAllTodos, getTodo, addTodo, deleteTodo, updateTodo } from "../controllers/todoController.js";

const router = express.Router();

//CRUD

// GET ALL TODOS
router.get("/all-todos", getAllTodos);

//GET ONE TODO
router.get("/:id", getTodo);

//ADD
router.post("/add", addTodo);

// DELETE
router.delete("/delete/:id", deleteTodo);

//UPDATE
router.patch("/update/:id", updateTodo);

export default router;
