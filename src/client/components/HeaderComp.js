import React from "react"
import { Link } from "react-router-dom"

export default function HeaderComp() {
  return (
    <header className="header-component">
      <span className="logo">FoodFood</span>
      <ul className="menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <Link to={"/meals"}>
          <li>Meals</li>
        </Link>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </header>
  )
}
