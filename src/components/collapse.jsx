

// function Collapse ({title, content}) {


//     return (
//         <>
//             <div>
//                 {title}
//             </div>
//             <div >
//                 {content}
//             </div>
//         </>
//     )
// }

// export default Collapse;

import "./collapse.css";
import DropArrow from "../assets/arrowCollapse.svg";
import { useState } from "react";

function Collapse({ title, text }) {
  const [toggle, setToggle] = useState(false);
  let content;

  if (Array.isArray(text)) {
    content = text.map((word, index) => <p key={index}>{word}</p>);
  } else {
    content = <p>{text}</p>;
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
      <div className={`content ${toggle ? "content-show" : ""}`}>{content}</div>
    </div>
  );
}
export default Collapse;