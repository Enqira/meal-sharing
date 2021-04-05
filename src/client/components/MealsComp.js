import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MealComp from "./MealComp"

export default function MealsComp({ meals, loading, reservations }) {
  const [showOption, setShowOption] = useState("all")
  const [sortOption, setSortOption] = useState("latest")
  const [newMeals, setNewMeals] = useState(meals)

  const handleShowChange = e => {
    setShowOption(e.target.value)
  }
  const handleSortChange = e => {
    setSortOption(e.target.value)
  }

  const sort = array => {
    switch (sortOption) {
      case "lower-price":
        console.log("lower-price")
        return array.sort((a, b) => a.price - b.price)
      case "higher-price":
        console.log("higher-price")
        return array.sort((a, b) => b.price - a.price)
      case "oldest":
        console.log("oldest")
        return array.sort(
          (a, b) => new Date(a.created_date) - new Date(b.created_date)
        )
      default:
        console.log("latest bbb")
        return array.sort(
          (a, b) => new Date(b.created_date) - new Date(a.created_date)
        )
    }
  }
  useEffect(() => {
    const currentTime = Date.now()

    if (!loading) {
      //   -----------------------

      // ------------------------

      switch (showOption) {
        case "upcoming":
          const upcomingMeals = meals.filter(
            meal => Date.parse(meal.when) > currentTime
          )

          setNewMeals(upcomingMeals)
          break
        case "ended":
          const endedMeals = meals.filter(
            meal => Date.parse(meal.when) < currentTime
          )
          setNewMeals(endedMeals)
          break
        case "all":
          setNewMeals(meals)
          break
      }
      //   ------------------------------
    }
  }, [showOption, loading, meals, sortOption])

  return (
    <section className="main-component">
      <div className="main-component-form">
        <form>
          <label>
            Show:
            <select value={showOption} onChange={handleShowChange}>
              <option value="all">All</option>
              <option value="upcoming">Upcoming</option>
              <option value="ended">Ended</option>
            </select>
          </label>
        </form>

        <form>
          <label>
            Sort by:
            <select value={sortOption} onChange={handleSortChange}>
              <option value="latest">Latest created</option>
              <option value="oldest">Oldest created</option>
              <option value="lower-price">Lowest price</option>
              <option value="higher-price">Higher price</option>
            </select>
          </label>
        </form>
      </div>
      {/* if not loading display meals */}
      {!loading ? (
        <div className="meals">
          {/* .slice(0)
            .reverse() */}
          {sort(newMeals).map(meal => (
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
