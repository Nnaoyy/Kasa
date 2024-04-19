import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

import "./error.css";

function Error() {
  const error = useRouteError();
  console.error(error);
    return (
        <div className="error">
            <p>404</p>
            <span>Oups! La page que vous demandez n'existe pas</span>
            <Link to="/">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error;
