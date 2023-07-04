import { resolve } from "path"
import imagenes from "./Components/Img/imagenes"
const Producto = [
    {
        id:1,
        name: 'Cama',
        precio: 2000,
        categoria: 'Camas',
        img: 'https://www.espacity.com/w/mueble/cama-eco/',
       // img: <img src={imagenes.img1} alt="Imagen"/>,
        stock:10,
        descripcion: 'Descripcion de cama'
    },
    {
        id:2,
        name: 'Almohada ',
        precio: 1500,
        categoria: 'Productos varios',
        img:<img src={imagenes.img2} alt="Imagen"/>,
        stock:20,
        descripcion: 'Descripcion de almohadas'
    },
    {
        id:3,
        name: 'Sommier ',
        precio: 1500,
        categoria: 'Camas',
        img:<img src={imagenes.img3} alt="Imagen"/>,
        stock:5,
        descripcion: 'Descripcion de camas'
    },
    
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Producto)
        }, 1000)
    })
}


export const getProductosById = (ProductoId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(Producto.find(prod => prod.id=== ProductoId))
        }, 1000)
    })
}
