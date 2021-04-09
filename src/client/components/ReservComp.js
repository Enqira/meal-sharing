import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
const axios = require("axios")
import MealComp from "./MealComp"

export default function ReservComp({ meals, reservations }) {
  const { register, handleSubmit } = useForm("")
  //   const [matchedMeal, setMatchedMeal] = useState([])
  const params = useParams()

  const matchedMeal = meals.find(meal => meal.id === parseInt(params.id))
  //   const matchedReservation = reservations.find(
  //     reservation => reservation.meal_id === matchedMeal.id
  //   )
  //   console.log(matchedReservation)

  console.log(matchedMeal)
  const onSubmit = data => {
    data.id = matchedMeal.id
    console.log(data)
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    axios
      .post("http://localhost:5000/api/reservations", data)
      .then(response => console.log(typeof response.status))
      .catch(err => console.log(err))
  }

  return matchedMeal ? (
    <div className="form-container">
      <h3>{matchedMeal.title}</h3>
      <span>Place: {matchedMeal.location} </span>
      <span>Price: {matchedMeal.price}</span>
      <span>Please fill this form to make a reservation for this meal:</span>

      <form onSubmit={handleSubmit(onSubmit)} className="reservForm">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          ref={register}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={register}
          required
        />
        <label>Phone</label>
        <input
          type="number"
          name="phone"
          placeholder="phone"
          ref={register}
          required
        />
        <label>Number of guests</label>
        <input
          type="number"
          name="guests"
          placeholder="number of guests"
          ref={register}
          required
        />
        <input className="submit-btn" type="submit" />
      </form>
      <p className="reservSubmitLabel">Meal reserved succesfully!</p>
    </div>
  ) : (
    <h3>{"Meal id out of range"}</h3>
  )
}
