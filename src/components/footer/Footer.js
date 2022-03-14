import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Programmed with <span role="img">❤️</span> by{" "}
          <span role="img">🧑🏻‍🚀</span>
          {greeting.title2}
          <span role="img">🧑🏻‍💻</span> using React, HTML5, CSS3, ES6, etc...
          ©️2022 Iron Marvel™️
        </p>
      </Fade>
    </div>
  );
}
