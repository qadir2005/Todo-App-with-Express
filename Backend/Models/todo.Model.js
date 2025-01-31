import mongoose from "mongoose";

const TodoScheema = new mongoose.Schema({
    todoContent:{
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        required: true
    }
})

const Todo = mongoose.model("Todo", TodoScheema)
export default Todo;