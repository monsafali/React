import Product  from "./Product"


function ProductTab(){
    let feature = ["hi-tesh","Durable","Fast"]
    return  <>
    <Product title="bigGame" description="worked hard" feature={feature}/>
    {/* <Product title={"loser"} description={"So jao koi nai"}/>
    <Product title={"Qismat"} description={"jo milta hai qismat se milta hai mehnat choro"}/> */}
  
    </>
}


export default ProductTab