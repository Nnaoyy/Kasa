import Caroussel from "../components/caroussel";
import Collapse from "../components/collapse";
import  data  from "../datas/logements.json"
import { useParams, useNavigate } from "react-router-dom";

function Logement (){
    const url = useParams();

    const foundItem = data.find((item) => item.id === url.houseId);

    console.log(foundItem);

    return (
        <>
            <Caroussel pictures={foundItem.pictures} />
            <div>
                <div>
                    <p>{foundItem.title}</p>
                    <span>{foundItem.location}</span>
                </div>
                <div>
                    <p>{foundItem.host.name}</p>
                    <img src={foundItem.host.picture} alt="photo de profil"/>
                </div>
            </div>
            <div>
                <div>
                {foundItem.tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))}
                </div>
                <div>
                    {foundItem.rating}
                </div>
            </div>
            <div>
                <Collapse title="Description" text={foundItem.description}/>
                <Collapse title="Équipements" text={foundItem.equipments}/>
            </div>
        
        </>
    )
}

export default Logement