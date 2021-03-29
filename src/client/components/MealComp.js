import React from "react"
import { useParams } from "react-router-dom"

export default function MealComp({ meals }) {
  const params = useParams()
  console.log(meals)
  console.log(parseInt(params.id))
  const matchedMeal = meals.find(meal => meal.id === parseInt(params.id))

  console.log(matchedMeal)

  return matchedMeal ? (
    <h3>{matchedMeal.title}</h3>
  ) : (
    <h3>{"Meal id out of range"}</h3>
  )
}
