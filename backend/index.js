const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");

const express = require("express");
const cors =  require("cors")
const app = express();

app.use(cors({}));
app.use(express.json());

app.post("/todo",async (req,res)=>{

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json(
            {
                msg:"You have send the wrong inputs"
            }
        )
        return;
    }

    try {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false,
        });
        res.status(201).json({ msg: "Todo created successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error creating todo", error });
    }

});


app.get("/todos",async (req,res)=>{
    const todos = await todo.find({})
    console.log(todos)

    res.status(200).json({
        success:true,
        msg:"Todos fetched",
        todos
    })
})


app.put("/completed",async (req,res)=>{

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You have send the wrong inputs"
        })
    }  

    await todo.updateOne({
        _id:req.body.id,
    },{
        completed:true
    })

    res.json({
        msg:"Todo marked as completed"
    })
})


app.listen(3000)