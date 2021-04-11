import React, { useState } from "react"
import { useForm } from "react-hook-form"
const axios = require("axios")

export default function MealFormComp({ formState, setFormState, addMealRef }) {
  const { register, handleSubmit } = useForm("")

  const handleStyle = () => {
    formState ? setFormState(false) : setFormState(true)
  }

  const onSubmit = data => {
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    axios
      .post("http://localhost:5000/api/meals", data)
      .then(response => {
        console.log(response.status)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="form-container" ref={addMealRef}>
      <h4>Become a host, add a meal now.</h4>
      <button className="small-btn dark-btn" onClick={() => handleStyle()}>
        {formState ? "Add meal" : "Cancel"}
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mealForm"
        style={{ display: formState ? "none" : "flex" }}
      >
        {/* <label>Add a new meal</label> */}
        <label>title</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          ref={register}
          required
        />
        <label>description</label>
        <textarea
          type="text"
          name="description"
          placeholder="description"
          ref={register}
          required
        />
        <label>location</label>
        <input
          type="text"
          name="location"
          placeholder="location"
          ref={register}
          required
        />
        <label>when</label>
        <input
          type="date"
          name="when"
          placeholder="when"
          ref={register}
          required
        />
        <label>price</label>
        <input
          type="number"
          name="price"
          placeholder="price"
          ref={register}
          required
        />
        <label>max reservations</label>
        <input
          type="number"
          name="max_reservations"
          placeholder="max reservations"
          ref={register}
          required
        />
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  )
}
