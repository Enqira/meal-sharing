import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MealComp from "./MealComp"

export default function MealsComp({ meals, loading, reservations }) {
  const [selectedOption, setSelectedOption] = useState("all")
  const [newMeals, setNewMeals] = useState([])

  const handleChange = e => {
    setSelectedOption(e.target.value)
  }
  useEffect(() => {
    console.log(`selected option changed ${selectedOption}`)
    const currentTime = Date.now()
    if (!loading) {
      if (selectedOption === "upcoming") {
        const filteredMeals = meals.filter(
          meal => Date.parse(meal.when) > currentTime
        )
        setNewMeals(filteredMeals)
      } else if (selectedOption === "ended") {
        const filteredMeals = meals.filter(
          meal => Date.parse(meal.when) < currentTime
        )
        setNewMeals(filteredMeals)
      } else {
        setNewMeals(meals)
      }
    }
  }, [selectedOption, loading, meals])

  return (
    <section className="main-component">
      <form>
        <label>
          Show:
          <select value={selectedOption} onChange={handleChange}>
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="ended">Ended</option>
          </select>
        </label>
      </form>
      {!loading ? (
        <div>
          {newMeals.map(meal => (
            <MealComp meal={meal} key={meal.id} reservations={reservations} />
          ))}
        </div>
      ) : (
        <div className="loading">loading...</div>
      )}
    </section>
  )
}

{
  /* <MealComp meal={meal} key={meal.id} reservations={reservations} /> */
}
