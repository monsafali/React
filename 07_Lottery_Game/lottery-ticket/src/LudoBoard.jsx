import { useState } from "react"

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0})
    let [arr, SetArr] = useState(["no moved"])

    let updateBlue = () => {
        // setMoves((pervMove) =>{
        //     return {...pervMove, blue: pervMove.blue+1}
        // })

        SetArr((prevArr) =>{
            return [...arr, "blue moves"]
        });
        console.log(arr)
    }

    let updateYellow = () => {
        setMoves((pervMove) =>{
            return {...pervMove, yellow: pervMove.yellow+1}
        })
    }



    let updateGreen = () => {
        setMoves((pervMove) =>{
            return {...pervMove, green: pervMove.green+1}
        })
    }


    let updateRed = () => {
        setMoves((pervMove) =>{
            return {...pervMove, red: pervMove.red+1}
        })
    }

    return (<div>
        <p>Game Begins</p>
        <p>{arr}</p>
        <div className="board">
            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
            <p>yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
            <p>green Moves = {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            <p>Red Moves = {moves.red}</p>
            <button style={{backgroundColor: "red"}}  onClick={updateRed}>+1</button>
        </div>
    </div>)
}