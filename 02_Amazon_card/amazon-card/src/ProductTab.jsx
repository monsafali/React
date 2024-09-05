import Product  from "./Product"


function ProductTab(){
    let styles = {
        display : "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        
    }
    return  (
        <div style={styles}>
            <Product title="LOgitechr " idx={0}/>
            <Product title="Apple Pencil"idx={1}/>
            <Product title="Zebronics Zeb-T"idx={2}/>
            <Product title="Fair loverly " idx={3} />
        </div>
    )
    
}


export default ProductTab