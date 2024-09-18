import { useState } from "react"

export default function Form(){
    let [fullname, setFullname] = useState("shrdha")

    let handleNameChange = (event) =>{
        setFullname(event.target.value)      
    }

    return (
        <form>
            <label htmlFor="username">Full Name</label>
            <input placeholder="enter full name" type="text" id="username" value={fullname} onChange={handleNameChange}/>
            <button>Submit</button>
        </form>
    )
}