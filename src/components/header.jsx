import { Link } from "react-router-dom";


import './header.css';

function Header() {
    return(
        <div className="header">
            <img src="/LOGODesktop.svg" alt="logo" />
       
        <nav>
            <Link to="">Accueil</Link>
            <Link to="about">A propos</Link>
        </nav>
       </div>
    )
}

export default Header