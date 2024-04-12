import { Link } from "react-router-dom"
import './header.css'

function Header() {
    return(
        <div>KASA 
       
        <nav>
            <Link to ={''}>Accueil</Link>
            <Link to ={'about'}>A propos</Link>
        </nav>
       </div>
    )
}

export default Header