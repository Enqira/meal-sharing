import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import visitor from "../assets/images/visitor.png";
import host from "../assets/images/host.png";

export default function KnowMoreComp({ meals, loading, inputRef }) {
  const [display, setDisplay] = useState("none");
  const [arrowTransform, setArrowTransform] = useState("rotate(90deg)");
  const ref = useRef();
  const handleArrowClick = () => {
    if (display === "none") {
      setArrowTransform("rotate(-90deg)");
      setDisplay("flex");
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setArrowTransform("rotate(90deg)");
      setDisplay("none");
    }
  };
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: 1920,
        opacity: 0.2,
      }}
    />
  );
  const handleClickFM = () => {
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="know-more-container" ref={ref}>
      <div className="know-more-upper">
        <h3 className="know-more-title" onClick={handleArrowClick}>
          click to learn how it works!
        </h3>
        <div className="arrow-container">
          <div
            className="arrow"
            onClick={handleArrowClick}
            style={{ transform: arrowTransform }}
          ></div>
        </div>
      </div>
      <ColoredLine color={"#141621"} />
      <div className="know-more-content" style={{ display: display }}>
        <div className="know-more-content-div">
          <div>
            <h2>Become a host</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <Link to={`/meals/`}>
              <button className="btn">Add meal</button>
            </Link>
          </div>
          <div className="img-container img-container-small">
            <img className="img" src={host} alt="host image" />
          </div>
        </div>

        <div className="know-more-content-div">
          <div>
            <h2>Attend meal events!</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <button className="btn" onClick={handleClickFM}>
              Find a meal
            </button>
          </div>
          <div className="img-container img-container-small">
            <img className="img" src={visitor} alt="visitor image" />
          </div>
        </div>
      </div>
    </section>
  );
}
