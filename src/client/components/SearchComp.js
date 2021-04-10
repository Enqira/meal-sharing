import React, { useState, useRef } from "react"
import { useForm } from "react-hook-form"

const API_MEALS = `http://localhost:5000/api/meals`
const API_SEARCH = "http://localhost:5000/api/search/"

export default function SearchComp({
  meals,
  setMeals,
  loading,
  setResult,
  inputRef
}) {
  const [inputId, setInputId] = useState()
  //   const inputRef = useRef()
  const handleChange = e => {
    setResult(true)
    const data = e.target.value
    let API_URL = API_SEARCH + data
    if (!data) API_URL = API_MEALS
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMeals(data)
        if (data.length === 0) {
          setResult(false)
        }
      })
  }
  const onInputClick = () => {
    inputRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const onSubmit = () => {
    console.log("submited")
    event.preventDefault()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mealForm"
      autoComplete="off"
      ref={inputRef}
    >
      <label>Search for a meal:</label>
      <input
        type="text"
        name="title"
        placeholder="search"
        onChange={handleChange}
        onClick={onInputClick}
        required
      />
    </form>
  )
}
