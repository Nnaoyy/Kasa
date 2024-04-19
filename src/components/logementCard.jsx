import "./logementCard.css"

function LogementCard({title, image}) {
    return (
        <div className="logementCard">
            <img src={image} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default LogementCard;