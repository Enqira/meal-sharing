import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";

export default function HeaderComp({ topRef }) {
  // state to know if nav is open or closed
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  return (
    <header className="header-component" ref={topRef}>
      <div className="header-upper">
        <span className="logo">invita</span>
        <Burger menuRef={menuRef} />
        <ul className="menu" ref={menuRef}>
          <Link to={"/"}>
            <li>Home </li>
          </Link>
          <Link to={"/meals"}>
            <li>Meals</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact </li>
          </Link>
          <Link to={"/about"}>
            <li>About </li>
          </Link>
        </ul>
      </div>
      <div className="luminance">
        <div className="luminance-container">
          <div className="luminance-top">invita</div>
          <div className="luminance-bot">
            <p>
              The place where you can share your favourite dishes with others,
              and attend other people meal events.
            </p>
            <div className="header-button-container">
              <Link to={`/meals/`}>
                <button className="btn header-button">Add meal</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
