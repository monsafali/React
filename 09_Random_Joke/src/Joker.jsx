import { useState } from "react"

export default function Joker (){
    let [joke, setJoke] = useState({})


    const URL = "https://official-joke-api.appspot.com/random_joke"

    const newJoker = async () =>{
        let respone =await fetch(URL)
        let jsonRespone = await respone.json()
        console.log(jsonRespone)
        setJoke({setup: jsonRespone.setup, punchline: jsonRespone.punchline})
    }

    return (
        <div>
            <h3> Joker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2> 
            <button onClick={newJoker}>Get joker</button>
        </div>
    )
}

