import Banner from "../components/banner"
import  data  from "../datas/logements.json"
import { Link } from 'react-router-dom'
import LogementCard from "../components/logementCard"
import "./home.scss"

function Home (){
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" page="home"/>
            <div className="cardContainer">
                {data.map((house)=> (
                    <Link to={`logement/${house.id}`} key={house.id}>
                        <LogementCard title={house.title} image={house.cover}/>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Home