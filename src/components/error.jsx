import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
    return (
        <div>
            <h1>Oups! La page que vous demandez n'existe pas</h1>
        </div>
    )
}
