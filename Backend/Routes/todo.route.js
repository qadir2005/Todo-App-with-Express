import express, { Router } from "express";
import  { createTodo,deleteTodo,getTodos, updateTodo } from "../Controller/todo.Controller.js";
const todoRouter = Router();
todoRouter.post("/create", createTodo);
todoRouter.get("/fetch", getTodos)
todoRouter.put("/update/:id", updateTodo)
todoRouter.delete("/delete/:id", deleteTodo)

export { todoRouter};

