import { Link } from "react-router-dom";
import './header.css';
import logoDesktop from '../assets/LOGODesktop.svg';

function Header() {
    return(
        <div className="header">
            <img src={logoDesktop} alt="logo" />
       
        <nav>
            <Link to ={''}>Accueil</Link>
            <Link to ={'about'}>A propos</Link>
        </nav>
       </div>
    )
}

export default Header