import express, { Router } from "express";
import  { createTodo,getTodos, updateTodo } from "../Controller/todo.Controller.js";

const todoRouter = Router();

todoRouter.post("/create", createTodo);
todoRouter.get("/fetch", getTodos)
todoRouter.put("/update:/id", updateTodo)

export { todoRouter};

