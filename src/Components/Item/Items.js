import { Link } from "react-router-dom"


const Item = ({id, name, img, precio, stock }) =>{
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
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item