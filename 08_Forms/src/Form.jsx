import { useState } from "react"

export default function Form(){
    let [FormData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
    })
    


    // let handleNameChange = (event) =>{
    //     setFullname(event.target.value)      
    // }  
 
    // let handlUsername = (event) =>{
    //     setUsername(event.target.value)      
    // }

    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return {...currData,
                [event.target.name] : event.target.value
            };
        })
    }

    let handleSubmit =  (event) =>{
        event.preventDefault()
        console.log(FormData)
        setFormData({
            fullname: "",
            username: "",
            password: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">FullName</label>
            <input placeholder="enter username name" type="text" 
            id="fullname" value={FormData.fullname}  name="fullname"
            onChange={handleInputChange}
            />
            <br /><br />
            <label htmlFor="username">UserName</label>
            <input placeholder="enter full name" type="text" 
            id="username" value={FormData.username} name="username"
            onChange={handleInputChange}/>

<br /><br />
            <label htmlFor="password">Password</label>
            <input placeholder="enter Password" type="password" 
            id="password" value={FormData.password} name="password"
            onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    )
}