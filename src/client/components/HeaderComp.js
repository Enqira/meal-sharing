import React from "react"
import PropTypes from "prop-types"

export default function HeaderComp() {
  return (
    <header className="header-component">
      <div>
        <span>Food Web</span>
        <ul>
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
      </div>
    </header>
  )
}
