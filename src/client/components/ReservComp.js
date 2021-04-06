import React from "react"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
const axios = require("axios")
import MealComp from "./MealComp"

export default function ReservComp({ meals }) {
  const { register, handleSubmit } = useForm("")
  const params = useParams()
  console.log(params.id)

  const matchedMeal = meals.find(meal => meal.id === parseInt(params.id))

  const onSubmit = data => {
    data.id = matchedMeal.id
    console.log(data)
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    axios
      .post("http://localhost:5000/api/reservations", data)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  return matchedMeal ? (
    <div className="mealReservation">
      {/* <h3>{matchedMeal.title}</h3>
      <p>Origen: {matchedMeal.location} </p>
      <p>Price: {matchedMeal.price}</p>
      <p>Please fill this form to make a reservation for this meal:</p> */}
      <MealComp meal={matchedMeal} />

      <form onSubmit={handleSubmit(onSubmit)} className="reservationForm">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          ref={register}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={register}
          required
        />
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          placeholder="phone"
          ref={register}
          required
        />
        <label>Number of guests:</label>
        <input
          type="number"
          name="guests"
          placeholder="number of guests"
          ref={register}
          required
        />
        <input type="submit" />
      </form>
    </div>
  ) : (
    <h3>{"Meal id out of range"}</h3>
  )
}
