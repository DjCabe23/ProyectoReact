import "./Itemcount.css"
import { useState } from "react" 

const ItemCounts = ({stock, initial, onAdd, })=>{
    const [quantity, setQuantity] = useState(initial)
    
    const incremento = ()=>{
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decremento = () =>{
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="Producto">
            <div className="Controles">
                <button className="Boton" onClick={decremento}>-</button>
                <h5 className="Numero">{quantity}</h5>
                <button className="Boton" onClick={incremento}>+</button>
            </div>
            <div>
                <button className="Boton" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    agregar al carrito
                </button>
            </div>
        </div>
    )

}

export default ItemCounts
