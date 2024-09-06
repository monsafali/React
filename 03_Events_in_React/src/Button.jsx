function clicked(event){
    console.log("Button Was clicked")
    console.log(event)
}

function doubble(){
    console.log("dobule clicked")
}



export default function Button(){
    return (
        <div>
            <button onClick={clicked}>Click me</button>
            <p onMouseEnter={doubble}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus molestiae non ad recusandae atque quasi iste voluptate eius aperiam, doloremque alias quae ipsam maiores laborum earum harum illum, distinctio nemo?</p>
        </div>
    )

}