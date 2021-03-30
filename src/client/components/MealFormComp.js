import React, { useState } from "react"
import { useForm } from "react-hook-form"
const axios = require("axios")

export default function MealComp({ formState, setFormState }) {
  const { register, handleSubmit } = useForm("")

  console.log(formState)
  const handleStyle = () => {
    formState ? setFormState(false) : setFormState(true)
  }

  const onSubmit = data => {
    console.log(data)
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    axios
      .post("http://localhost:5000/api/meals", data)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <button onClick={() => handleStyle()}>
        {formState ? "Add meal" : "Cancel"}
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mealForm"
        style={{ display: formState ? "none" : "flex" }}
      >
        <label>Add a new meal</label>
        <label>title:</label>
        <input
          type="text"
          name="title"
          placeholder="title"
          ref={register}
          required
        />
        <label>description:</label>
        <input
          type="text"
          name="description"
          placeholder="description"
          ref={register}
          required
        />
        <label>location:</label>
        <input
          type="text"
          name="location"
          placeholder="location"
          ref={register}
          required
        />
        <label>when:</label>
        <input
          type="date"
          name="when"
          placeholder="when"
          ref={register}
          required
        />
        <label>price:</label>
        <input
          type="number"
          name="price"
          placeholder="price"
          ref={register}
          required
        />
        <label>max reservations:</label>
        <input
          type="number"
          name="max_reservations"
          placeholder="max reservations"
          ref={register}
          required
        />
        <input type="submit" />
      </form>
    </div>
  )
}
