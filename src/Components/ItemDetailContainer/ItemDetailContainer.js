import { useState , useEffect } from "react";
import { getProductosById } from "../../Productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () =>{
    const [Productos, setProductos] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductosById(itemId)
            .then(Response=>{
                setProductos(Response)
            })
            .catch(error =>{
                console.error(error)
            })
    },[itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...Productos}/>
        </div>
    )
}

export default ItemDetailContainer