import React from "react"

export default function HeaderComp() {
  return (
    <header className="header-component">
      <span className="logo">FoodFood</span>
      <ul className="menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
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
