import React, { useState } from "react"
import { useForm } from "react-hook-form"

const API_MEALS = `http://localhost:5000/api/meals`
const API_SEARCH = "http://localhost:5000/api/search/"

export default function SearchComp({ meals, setMeals, loading }) {
  const [isEmpty, setIsEmpty] = useState(false)
  const handleChange = e => {
    setIsEmpty(false)
    const data = e.target.value
    let API_URL = API_SEARCH + data
    if (!data) API_URL = API_MEALS
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMeals(data)
        if (data.length === 0) {
          setIsEmpty(true)
        }
      })
  }

  const onSubmit = () => {
    console.log("submited")
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className="mealForm" autoComplete="off">
      {isEmpty && <label className="search-noresult">No results...</label>}
      <label>Search for a meal:</label>
      <input
        type="text"
        name="title"
        placeholder="search"
        onChange={handleChange}
        required
      />
    </form>
  )
}
