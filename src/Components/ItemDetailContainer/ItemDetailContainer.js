import { useState , useEffect } from "react";
import { getProductosById } from "../../Productos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [Productos, setProductos] = useState(null)

    useEffect(()=>{
        getProductosById('1')
            .then(Response=>{
                setProductos(Response)
            })
            .catch(error =>{
                console.error(error)
            })
    },[])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...Productos}/>
        </div>
    )
}

export default ItemDetailContainer