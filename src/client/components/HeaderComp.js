import React from "react"
import PropTypes from "prop-types"

export default function HeaderComp() {
  return (
    <header className="header-component">
      <span className="logo">Food Web</span>
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
