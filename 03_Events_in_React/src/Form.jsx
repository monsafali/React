function handleFormSubmit(event){
    event.preventDefault()
    console.log("Form was submitted successfuly")
}



export default function Form(){
    return( 
    <form onSubmit={handleFormSubmit}>
        
        <input type="text" name="" id="" />
        <button >Submit</button>
      
    </form>
    )
}