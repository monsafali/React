import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}])
    let [newTodo, setnewTodo] = useState("");

    let addNewTask = () =>{
       setTodos((prevTodos) =>{
        return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
       })
       setnewTodo("");

    }

    let updateTadoValue = (event) => {
        setnewTodo(event.target.value)
       
    }
    
    let deleteTodo = (id) =>{
       setTodos( () =>todos.filter((todo) => todo.id != id));
       
    }

    let markAsDone =() =>{
        setTodos(( prevTodos) =>
            prevTodos.map((todo) =>{
           return {
            ...todo,
           isDone: true,
           }
        }));
    }

    let markAllDone = (id) =>{
        setTodos(( prevTodos) =>
            prevTodos.map((todo) =>{
            if(todo.id == id){
                return {
                    ...todo,
                    isDone: true,
                   }
            } else {
                return todo;
            }
            
         })
        );
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
           <span style={todo.isDone ? {textDecoration: "line-through"}: {}}> {todo.task}</span>
           &nbsp; &nbsp;&nbsp;
           <button onClick={()=>deleteTodo(todo.id)}>delete</button>
           <button onClick={()=>markAsDone(todo.id)}>markAsDone</button>
        </li>
        ))}
    </ul>

    <br></br>
    <button onClick={markAllDone}>markAllDone</button>
    </div>
)
}