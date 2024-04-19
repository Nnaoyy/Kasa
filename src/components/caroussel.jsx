import { useState } from "react";
import leftArrow from "../assets/LeftArrow.svg";
import rightArrow from "../assets/RightArrow.svg";

import "./caroussel.css"

function Caroussel( {pictures}) {
    const [currentPicture, setCurrentPicture] = useState(0);
    const length = pictures.length;
  
    const handleRightArrow = () => {
      setCurrentPicture((prevPicture) =>
        prevPicture === length - 1 ? 0 : prevPicture + 1
      );
    };
  
    const handleLeftArrow = () => {
      setCurrentPicture((prevPicture) =>
        prevPicture === 0 ? length - 1 : prevPicture - 1
      );
    };
  
    return (
        <div className="caroussel">
            {pictures.map((picture, index) => (
            <img
                key={index}
                src={picture}
                alt={`Image du logement ${index + 1}`}
                className={`img ${index === currentPicture ? "show" : ""}`} 
            />
            ))}
            {length > 1 && (
            <>
                <img
                onClick={handleLeftArrow}
                className="leftArrow"
                src={leftArrow}
                alt="Flèche gauche"
                />
                <img
                onClick={handleRightArrow}
                className="rightArrow"
                src={rightArrow}
                alt="Flèche droite"
                />
            </>
            )}
    
            {length > 1 && (
            <p className="counter">
                {currentPicture + 1}/{length}
            </p>
            )}
        </div>
    );
}

export default Caroussel;