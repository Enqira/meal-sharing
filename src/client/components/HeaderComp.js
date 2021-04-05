import React from "react"
import { Link } from "react-router-dom"

export default function HeaderComp() {
  return (
    <header className="header-component">
      <div className="header-upper">
        <span className="logo">invita</span>
        <ul className="menu">
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
        <div className="luminance-top">invita</div>
        <div className="luminance-bot">
          <p>
            The place where you can share your favorite dishes with others, and
            attend other people meal events.
          </p>
        </div>
      </div>
    </header>
  )
}
