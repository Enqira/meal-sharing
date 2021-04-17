import React, { useState, useRef, useEffect } from "react"
import "../style/Burger.css"

export default function Burger({ menuRef }) {
  const [open, setOpen] = useState(false)
  const [mediaPassed, setMediaPassed] = useState()
  const firstLineRef = useRef()
  const secondLineRef = useRef()
  const thirdLineRef = useRef()
  const handleBurgerClick = () => {
    if (!open) {
      menuRef.current.style.display = "flex"
      setOpen(true)
      firstLineRef.current.style.transform = "rotate(45deg)"
      thirdLineRef.current.style.transform = "rotate(-45deg)"
      secondLineRef.current.style.transform = "translateX(100px)"
    } else {
      menuRef.current.style.display = "none"
      setOpen(false)
      firstLineRef.current.style.transform = "rotate(0)"
      thirdLineRef.current.style.transform = "rotate(0)"
      secondLineRef.current.style.transform = "translateX(0)"
    }
  }
  //   function and eventlistener to change display of menu depending of screen size
  const updateSize = () => {
    let mql = window.matchMedia("(min-width: 650px)")
    mql.matches
      ? (menuRef.current.style.display = "flex")
      : (menuRef.current.style.display = "none")
  }
  window.addEventListener("resize", updateSize)

  return (
    <>
      <div className="burger" onClick={handleBurgerClick}>
        <div ref={firstLineRef} className="line" />
        <div ref={secondLineRef} className="line" />
        <div ref={thirdLineRef} className="line" />
      </div>
    </>
  )
}
