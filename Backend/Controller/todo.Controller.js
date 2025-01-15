import Todo from "../Models/todo.Model.js";

const createTodo = async (req,res)=>{
    res.send("hy evryone")
    const todo = new Todo({
        todoContent: req.body.todoContent,
        completed: req.body.completed
    })

    try{
         const  newTodo = await todo.save();
        res.status(201).json({message:"Todo added Successfully ", newTodo})
    }catch(error){
        res.json({message:"Todo add nhi horhe", newTodo})
    }
}
export default createTodo;