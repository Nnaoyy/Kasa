import "./logementCard.css"

function LogementCard({title, image}) {
    return (
        <div className="logementCard">
            <img src={image} />
            <p>{title}</p>
        </div>
    )
}

export default LogementCard;