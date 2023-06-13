import "bulma/css/bulma.css"
import Carito from "./Cart/Cart"

function NavBar() {
    return(
        <nar>
             <div className="container is-max-desktop has-text-centered">
                 <div className="notification is-primary" >
                    <strong>LO DEL CABE</strong> 
                    <Carito/>
                 </div>
            </div>

            <div className="columns is-centered">
                <div className="column is-narrow">
                    <button className="button is-large">Home</button>
                    </div>
                    <div className="column is-narrow">
                    <button className="button is-large is-multiline" >Tienda</button>
                    </div>
                    <div className="column is-narrow">
                    <button className="button is-large is-multiline">Nosotros</button>
                    </div>

      
            </div>
      
        </nar>
    )

    
}

export default NavBar