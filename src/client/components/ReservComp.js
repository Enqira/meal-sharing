import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
const axios = require("axios")
import MealComp from "./MealComp"
import BackHomeComp from "./BackHomeComp"

export default function ReservComp({ meals, reservations }) {
  const { register, handleSubmit } = useForm("")
  const [display, setDisplay] = useState("none")
  const params = useParams()

  const matchedMeal = meals.find(meal => meal.id === parseInt(params.id))

  const onSubmit = (data, e) => {
    data.id = matchedMeal.id
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    axios
      .post("/api/reservations", data)
      .then(response => console.log(response.status))
      .catch(err => console.log(err))
    e.target.reset()
    setDisplay("block")
  }

  return matchedMeal ? (
    <>
      <BackHomeComp />
      <div className="form-container">
        <div>
          <h3>{matchedMeal.title}</h3>
          <span>Place: {matchedMeal.location} </span>
          <span>Price: {matchedMeal.price}</span>
          <span>
            Please fill this form to make a reservation for this meal:
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="reservForm">
          <label>Name*</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            ref={register}
            required
          />
          <label>Email*</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            ref={register}
            required
          />
          <label>Phone*</label>
          <input
            type="number"
            name="phone"
            placeholder="phone"
            ref={register}
            required
          />
          <label>Number of guests*</label>
          <input
            type="number"
            name="guests"
            placeholder="number of guests"
            ref={register}
            required
          />
          <input className="submit-btn" type="submit" />
          <br />
          <label>(*) required field.</label>
          <label>Note: submited information will be stored in database!</label>
        </form>
        <p style={{ display: display }} className="reservSubmitLabel">
          Meal reserved succesfully!
        </p>
      </div>
    </>
  ) : (
    <h3>{"Meal id out of range"}</h3>
  )
}
