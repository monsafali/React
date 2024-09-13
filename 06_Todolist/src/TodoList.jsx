import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4()}])
    let [newTodo, setnewTodo] = useState("");

    let addNewTask = () =>{
       setTodos((prevTodos) =>{
        return [...prevTodos, {task: newTodo, id: uuidv4()}]
       })
       setnewTodo("");

    }

    let updateTadoValue = (event) => {
        setnewTodo(event.target.value)
       
    }
    
    let deleteTodo = (id) =>{
       setTodos( () =>todos.filter((todo) => todo.id != id));
       
    }

    return (
    <div>
    <input placeholder="Add a task" value={newTodo} onChange={updateTadoValue}></input>
    <br /><br />
    <button onClick={addNewTask}>add Task</button>
    <br /><br /><br /><br />
    <hr />
    <h4>Tasks Todo</h4>
    <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
           <span> {todo.task}</span>
           &nbsp; &nbsp;&nbsp;
           <button onClick={()=>deleteTodo(todo.id)}>delete</button>
        </li>
        ))}
    </ul>
    </div>
)
}