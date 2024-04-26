import star from "../assets/Stars.svg";
import redStar from "../assets/RedStars.svg";

import "./stars.scss"

function Stars( {number} ){
    const score = [1, 2, 3, 4, 5];

    return (
      <div className="starsContainer">
        {score.map((item) =>
          number >= item ? (
            <img src={redStar} key={item} className="red" />
          ) : (
            <img src={star} key={item} className="gray" />
          )
        )}
      </div>
    )
}

export default Stars;