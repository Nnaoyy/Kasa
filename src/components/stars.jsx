import star from "../assets/Stars.svg";
import redStar from "../assets/RedStars.svg";

import "./stars.css"

function Stars( number ){
    const score = [1, 2, 3, 4, 5];
 console.log(number.number)
    return (
      <div className="starsContainer">
        {score.map((item) =>
          number.number >= item ? (
            <img src={redStar} key={item} className="red" />
          ) : (
            <img src={star} key={item} className="gray" />
          )
        )}
      </div>
    )
}

export default Stars;