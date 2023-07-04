

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
                <button className="Option">Ver detalles</button>
            </footer>
        </article>
    )
}

export default Item