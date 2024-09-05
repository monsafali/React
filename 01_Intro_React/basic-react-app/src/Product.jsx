import "./Product.css"

function Product({title, description,  salary}){
    let isDiscount = salary >1500;
    const style = {
        backgroundColor: isDiscount ? "pink" : ""
    };
    return (
        <div className="Product" style={style}>
            <h2>{title}</h2>
            <h3>{description}</h3>
            {salary}
            {isDiscount && <p>5% discount</p>}



        </div>
    )
}


export default Product;