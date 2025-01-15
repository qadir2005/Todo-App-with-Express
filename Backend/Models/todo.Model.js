import mongoose from "mongoose";

const TodoScheema = new mongoose.Schema({
    todoContent:{
        type: String,
        require: true,
    },
    completed:{
        type: Boolean,
        require: true
    }
})

const Todo = mongoose.model("Todo", TodoScheema)
export default Todo;