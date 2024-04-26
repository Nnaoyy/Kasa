import DropArrow from "../assets/arrowCollapse.svg";
import { useState } from "react";

import "./collapse.scss";

function Collapse({ title, text }) {
  const [toggle, setToggle] = useState(false);
  
  function getContent(){
    let content;

    if (Array.isArray(text)) {
      content = <ul>{text.map((word, index) => <li key={index}>{word}</li>)}</ul>;
    } else {
      content = <p>{text}</p>;
    }
    return content;
}
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="collapseContainer">
      <div className="title">
        <p>{title}</p>
        <img
          className={`${toggle ? "show" : ""}`}
          onClick={handleToggle}
          src={DropArrow}
          alt="arrow svg"
        />
      </div>
      <div className={`content ${toggle ? "content-show" : ""}`}>{getContent()}</div>
    </div>
  );
}
export default Collapse;