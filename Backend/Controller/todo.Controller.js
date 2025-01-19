import Todo from "../Models/todo.Model.js";

export const createTodo = async (req,res)=>{

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
    res.send("todo Added successfully")
}


//  Todo Ko get krne kelye
export const getTodos = async (req,res)=>{
    try {
        const todos = await Todo.find()
        res.status(200).json({message: "todo Fetched Succesfully", todos})
        
    } catch (error) {
        res.status(401).json({message: "Todo nhi mile ", todos:null})
    }
} 

//  Todo ko update krne kelye 

export const updateTodo = async (req,res)=>{
    res.send("khuch tou update ho ja bhai")

    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id , req.body, {new: true})
        res.json({message:"Todo update ho gye hai", todo})
        
    } catch (error) {
        res.json({message:"todo update mein khuch problem hai ", todo:null})
    }

}

// todo ko delete krna hai 

export const deleteTodo = async(req,res)=>{
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
    res.json({message:"todo delete ho gya hai", todo})        
    } catch (error) {
        res.json({message:"todo delete nhi horha khuch error hai", todo:null})        

    }

}