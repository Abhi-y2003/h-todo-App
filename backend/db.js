const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})


mongoose.connect('')

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}
