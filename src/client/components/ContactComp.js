import React from "react";
import "../style/ContactComp.styles.css";

export default function ContactComp() {
  return (
    <div className="container">
      <div>
        <h3>Contact info :</h3>
        <p>
          Portfolio: <a href="https://www.enqira.com">enqira.com</a>
        </p>
        <p>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/enqira/">
            linkedin.com/in/enqira
          </a>
        </p>
        <p>
          Github:{" "}
          <a href="https://github.com/enqiraenqira/">github.com/enqira</a>
        </p>
        <p>
          source code:{" "}
          <a href="https://github.com/Enqira/meal-sharing">
            github.com/Enqira/meal-sharing
          </a>
        </p>
      </div>
    </div>
  );
}
