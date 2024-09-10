import { useState } from "react"
export default function LikeButton(){
    let [IsLiked, setIsLiked] =useState(false)
    let [click, setClicked] = useState(0)



    let toggleLike = () =>{
        setIsLiked(!IsLiked)
        setClicked(click+1)
    }

    let likeStyle = {color: "red"};
    return (<div>
        <p>Clicked= {click}</p>
        <p onClick={toggleLike}>
            { IsLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i>: <i className="fa-regular fa-heart"></i>}
            </p>
    </div>
    )
}