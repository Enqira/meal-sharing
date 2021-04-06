import React from "react"
import { Link } from "react-router-dom"

export default function BackHomeComp() {
  return (
    <div className="back-home-container">
      <Link to={"/"}>
        <button>Back Home</button>
      </Link>
    </div>
  )
}
