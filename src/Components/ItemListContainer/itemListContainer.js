//import "./itemListeContainer.css"
import { useState, useEffect } from "react"
import { getProductos } from "../../Productos"
import ItemLista from "../ItemLista/ItemLista"

const itemListContainer = ({ greeting }) => {
   const [Productos, setProductos] = useState([])

   useEffect(() => {
        getProductos()
            .then(response => {
                setProductos(response)
            })
            .catch(error=> {
                console.error(error)
            })
   }, [])
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemLista Productos={Productos}/>
        </div>
    )
    
}

export default itemListContainer