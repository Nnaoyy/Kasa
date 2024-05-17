import { Link , NavLink } from "react-router-dom";


import './header.scss';


function getClassName({isActive}) { 
    if (isActive) { 
        return "active"; // CSS class 
    } 
}

function Header() {
    
    
    

    return(
        <div className="header">
            <img src="/LOGODesktop.svg" alt="logo" />
       
        <nav>
            <NavLink className={getClassName} to="">Accueil</NavLink>
            <NavLink className={getClassName} to="about">A propos</NavLink>
        </nav>
       </div>
    )
}

export default Header