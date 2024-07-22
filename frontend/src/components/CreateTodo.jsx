import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const title = e.target.value;
            setTitle(title)
        }}/> <br></br>
        <input type="text" placeholder="description" onChange={function(e){
            const description = e.target.value;
            setDescription(description)
        }}/><br></br>

        <button onClick={()=>{
            fetch('http://localhost:3000/todo',{
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description: description
                }),
                headers:{
                    "content-type": "application/json"
                }
            })
            .then(async function(res){
                const data = await res.json()
                alert("Todo added")
            })
        }}>Add a todo</button>
    </div>
}