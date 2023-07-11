import "./Productos.css"

const Producto = [
    {
        id:1,
        name: 'Cama',
        precio: 2000,
        categoria: 'Camas',
        img: "https://www.espacity.com/w/wp-content/uploads/01347001000028_1.jpg",
        stock:10,
        descripcion: 'Descripcion de cama'
    },
    {
        id:2,
        name: 'Almohada ',
        precio: 1500,
        categoria: 'Accecsorios',
        img: "https://www.homecollection.com.ar/pub/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/r/e/relleno_50x70_1_1.jpg",
        stock:20,
        descripcion: 'Descripcion de almohadas'
    },
    {
        id:3,
        name: 'Sommier ',
        precio: 1500,
        categoria: 'Camas',
        img:"https://www.colchoncity.com.ar/wp-content/uploads/compacfirm2022-sommier-2plazas.jpg",
        stock:5,
        descripcion: 'Descripcion de camas'
    },
    
]

export const getProductos = () => {
    return new Promise((Resolve)=>{
        setTimeout(()=>{
            Resolve(Producto)
        }, 1000)
    })
}


export const getProductosById = (ProductoId) => {
    return new Promise((Resolve) => {
        setTimeout(()=>{
            Resolve(Producto.find(prod => prod.id=== ProductoId))
        }, 1000)
    })
}

export const getProductosByCategoria = (productosCategoria) => {
    return new Promise ((Resolve)=> {
        setTimeout(()=>{
            Resolve(Producto.filter(prod=>prod.categoria === productosCategoria))
        }, 1000)
    })
}