import Caroussel from "../components/caroussel";
import Collapse from "../components/collapse";
import  data  from "../datas/logements.json"
import { useParams } from "react-router-dom";
import Stars from "../components/stars.jsx";

import "./logement.scss";

function Logement (){
    const url = useParams();

    const foundItem = data.find((item) => item.id === url.houseId);

    return (
        <div className="logement">
            <Caroussel pictures={foundItem.pictures} />
            <div className="row">
                <div className="localisation">
                    <p>{foundItem.title}</p>
                    <span>{foundItem.location}</span>
                </div>
                <div className="identity">
                    <p>{foundItem.host.name}</p>
                    <img src={foundItem.host.picture} alt="photo de profil"/>
                </div>
            </div>
            <div className="row">
                <div className="tag">
                {foundItem.tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))}
                </div>
                <div className="star">
                   <Stars number={foundItem.rating}/>
                </div>
            </div>
            <div className="row logementCollapse">
                <Collapse title="Description" text={foundItem.description}/>
                <Collapse title="Équipements" text={foundItem.equipments}/>
            </div>
        
        </div>
    )
}

export default Logement