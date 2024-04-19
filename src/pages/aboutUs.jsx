import Banner from "../components/banner"
import Collapse from "../components/collapse.jsx"
import { aboutList } from "../datas/aboutList"

import "./aboutUs.css"

function AboutUs (){
    return (
        <>
            <Banner page="aboutUs"/>
            <div className="aboutContainer">
                {aboutList.map((about)=>(
                    <Collapse title={about.title} text={about.content} key={about.title}/>
                ))} 
            </div>
        </>
    )
}

export default AboutUs