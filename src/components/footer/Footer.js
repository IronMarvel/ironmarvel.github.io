import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Programmed with <span role="img">â¤ï¸</span> by{" "}
          <span role="img">ð§ð»âð</span>
          {greeting.title2}
          <span role="img">ð§ð»âð»</span> using React, HTML5, CSS3, ES6, etc...
          Â©ï¸2022 Iron Marvelâ¢ï¸
        </p>
      </Fade>
    </div>
  );
}
