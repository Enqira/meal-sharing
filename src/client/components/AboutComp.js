import React from "react";
import "../style/ContactComp.styles.css";

export default function AboutComp() {
  return (
    <div className="container">
      <div>
        <h3>About :</h3>
        <p>This web app was part of a Hack Your Future personal project.</p>
        <p>
          Main used technologies: NodeJS, React, MySQL, Javascript, HTML and
          CSS.
        </p>
        <br />
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
