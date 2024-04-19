

function Caroussel( {pictures}) {

    return(
        <>
        {pictures.map((picture,index)=>(
            <img src={picture} key={index} alt="photo"/>
        ))}
        </>
    )
}

export default Caroussel;