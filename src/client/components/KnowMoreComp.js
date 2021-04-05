import React, { useState, useEffect } from "react"

export default function KnowMoreComp({ meals, loading }) {
  const [display, setDisplay] = useState("none")
  const [arrowTransform, setArrowTransform] = useState("rotate(90deg)")
  const handleArrowClick = () => {
    if (display === "none") {
      setArrowTransform("rotate(-90deg)")
      setDisplay("flex")
    } else {
      setArrowTransform("rotate(90deg)")
      setDisplay("none")
    }
  }
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: 1920,
        opacity: 0.2
      }}
    />
  )

  return (
    <section className="know-more-container">
      <div className="know-more-upper">
        <h3 className="know-more-title" onClick={handleArrowClick}>
          click to learn how it works!
        </h3>
        <div className="arrow-container">
          <div
            className="arrow"
            onClick={handleArrowClick}
            style={{ transform: arrowTransform }}
          >
            ⮞
          </div>
        </div>
      </div>
      <ColoredLine color={"#141621"} />
      <div className="know-more-content" style={{ display: display }}>
        <p className="know-more-content-title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="know-more-content-div">
          <div>
            <h3>Become a host</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <img className="img" src="/public/meal-img.jpg" alt="host image" />
        </div>

        <div className="know-more-content-div">
          <div>
            <h3>Attend meal events!</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <img className="img" src="/public/meal-img.jpg" alt="host image" />
        </div>
      </div>
    </section>
  )
}
