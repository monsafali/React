import "./Product.css"
import Price from "./Price";

function Product({title,idx}){
    let oldPrice = ["12.95","11.85", "45.8","13.54"]
    let newPrice = ["8.99", "7.99", "35.00","10.45"]
    let Description = [
        ["8,000 DPI", "Intuitive surface"],
        ["Designed for iPad", "wireless"],
        ["High p 8,000 DPI", "surface"],
        ["Optimized for iPad", "Sectivity"]
      ]
    return (
        <div className="Product" >
            <h3>{title}</h3>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}


export default Product;