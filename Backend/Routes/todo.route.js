import express, { Router } from "express";
import createTodo from "../Controller/todo.Controller.js";

const router = Router()

router.post("/create", createTodo)

export default router;