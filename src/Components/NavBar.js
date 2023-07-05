import "bulma/css/bulma.css"
import Carito from "./Cart/Cart"
import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return(
        <nav className="NavBar">
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
        <Link to="/">
            <h3>
                Ecommerce
            </h3>
        </Link>
            <div className="Categoias">
            <NavLink to={`/category/Camas`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Camas</NavLink>
            <NavLink to={`/category/Accecsorios`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Accecsorios</NavLink>
            <NavLink to={`/category/Camas`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Sommier</NavLink>

            </div>
        </nav>
    )

    
}

export default NavBar