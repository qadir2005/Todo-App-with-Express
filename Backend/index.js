import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {todoRouter} from "./Routes/todo.route.js";

const app = express();

dotenv.config();

const port = process.env.PORT;
const DataBase_URI = process.env.DataBase;
     
// Database ko connect krha hun

try {
  await mongoose.connect(DataBase_URI);
  console.log("Database Connected Successfully");
} catch (error) {
  console.log("Error Issues");
}
// express mein Json ko parse mein convert krne ka method
app.use(express.json());

// Routes

app.use("/todo", todoRouter);

// todo kelye aik empty array  bna rha hun baad mein ise easily call kr sko

// const todos= []
app.get("/", (req, res) => {
  res.send("This is abdul Qadir");
});

// Todo ko call/get krne kelye
// app.get('/get-todos', (req, res) => {
//   res.send("hy every one")
// })

// // Todo ko add krne kelye

// app.post("todo-added",(req,res)=>{

//   const object = {
//     todoContent : req.body.raw,
//     id: 55
//     }
// todos.push(object)

// })

// // Todo ko delete krne kelye
// app.delete('/delete-todo',(req,res)=>{
//   res.send("deleted")
// })

// // Todo ko edit krne kelye
// app.patch("/edit-todo",(req,res)=>{
//   req.send("edit")
// })

// Agar koi route match na kare
app.use((request, response) => {
  response.status(404).send({ message: "abay route ko tou sahi daal" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
