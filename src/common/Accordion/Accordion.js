import React, { useRef, useState } from "react";
import logo from '../../assests/loopit.png';

import "./Accordion.css";
import Chevron from "./Chevron";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

 return (
  <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <img src={logo} className="accordion__img" alt="None"></img>
        <p className="accordion__title"><b>{props.title}</b></p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div className="accordion__text">
          {props.children}
        </div>
      </div>
  </div>
 );
}

export default Accordion;