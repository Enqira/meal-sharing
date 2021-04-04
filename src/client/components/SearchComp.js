import React from "react"
import { useForm } from "react-hook-form"

const API_MEALS = `http://localhost:5000/api/meals`
const API_SEARCH = "http://localhost:5000/api/search/"

export default function SearchComp({ meals, setMeals, loading }) {
  const handleChange = e => {
    const data = e.target.value
    let API_URL = API_SEARCH + data
    if (!data) API_URL = API_MEALS
    console.log(API_URL)
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMeals(data))
  }

  const onSubmit = () => {
    console.log("submited")
  }

  return (
    <form onSubmit={onSubmit} className="mealForm">
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
