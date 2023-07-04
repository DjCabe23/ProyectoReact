import './ItemLista.css'
import Items from '../Item/Items'

const ItemLista = ({Productos}) => {
    return(
        <div className='ListaGrupo'>
            {Productos.map(Prod=> <Items key={Prod.id}{...Prod}/>)}
        </div>
    ) 
}

export default ItemLista