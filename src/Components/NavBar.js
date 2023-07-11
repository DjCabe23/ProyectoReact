import "bulma/css/bulma.css"
import Carito from "./Cart/Cart"
import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return(
        <nav className="NavBar">
             <div className="Header">
                 <div className="Header" >
                    <strong>LO DEL CABE</strong> 
                    <Carito/>
                 </div> 
            </div>          
        <Link to="/">
            <h3 className="Menu"> 
                Menu
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