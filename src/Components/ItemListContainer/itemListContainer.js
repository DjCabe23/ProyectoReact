//import "./itemListeContainer.css"
import { useState, useEffect } from "react"
import { getProductos, getProductosByCategoria } from "../../Productos"
import ItemLista from "../ItemLista/ItemLista"
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [Productos, setProductos] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const ProductosFunc = categoryId ? getProductosByCategoria : getProductos
         ProductosFunc(categoryId)
            .then(Response => {
                setProductos(Response)
            })
            .catch(error=>{
                console.error(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemLista Productos={Productos}/>
        </div>
    )
  
}
export default ItemListContainer