import LOGOFooter from "../assets/LOGOFooter.svg"
import "./footer.css"

function Footer(){
    return(
        <div className="footer">
            <img src={LOGOFooter} alt='logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer