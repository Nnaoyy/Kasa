import Banner from "../components/banner"
import Collapse from "../components/collapse"
import { aboutList } from "../datas/aboutList"


function AboutUs (){
    return (
        <>
            <Banner page="aboutUs"/>
            <div>
                {aboutList.map((about)=>(
                    <Collapse title={about.title} content={about.content}/>
                ))} 
            </div>
        </>
    )
}

export default AboutUs