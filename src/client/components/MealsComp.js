import React from "react"
import { Link } from "react-router-dom"

export default function MealsComp({ meals }) {
  return (
    <div>
      {meals.map(meal => (
        <div key={meal.id}>
          <Link to={`/meals/${meal.id}`}>
            <h3>{meal.title}</h3>
          </Link>
          <span>Origen: {meal.location} </span>
          <span>Price: {meal.price}</span>
        </div>
      ))}
    </div>
  )
}
