const express = require('express')
const app = express()
const port = 3000

// todo kelye aik empty array  bna rha hun baad mein ise easily call kr sko

const todos= []
app.get("/",(req,res)=>{
  console.log(req);
  
})

// Todo ko call/get krne kelye
app.get('/get-todos', (req, res) => {
  res.send("hy every one")
})


// Todo ko add krne kelye 

app.post("todo-added",(req,res)=>{

  const object = {
    todoContent : req.body.raw,
    id: 55
    }
todos.push(object)



})

// Todo ko delete krne kelye
app.delete('/delete-todo',(req,res)=>{
  res.send("deleted")
})

// Todo ko edit krne kelye
app.patch("/edit-todo",(req,res)=>{
  req.send("edit")
})

// Agar koi route match na kare 
app.use((request,response)=>{
  response.status(404).send({message: "No route Found"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})