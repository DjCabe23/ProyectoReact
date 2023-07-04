import ItemCount from "../Itemcount/ItemCount"

const itemDetail = ({id, name, img, categoria, descripcion, precio, stock}) => {

    return(
        <article className="cartItem">
            <header className="header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="Itemimg"/>
            </picture>
            <section>
                <p className="info">
                    precio: ${precio}
                </p>
                <p className="info">
                    Stock disponible:{stock}
                </p>
                <p className="Info">
                    Descripcion:{descripcion}
                </p>
                <p className="Info">
                    categoria :{categoria}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agrgada', quantity)}/>
            </footer>
        </article>
    )
}

export default itemDetail