import React, { useState } from "react";
import { useForm } from "react-hook-form";
const axios = require("axios");

export default function MealFormComp({ formState, setFormState, addMealRef }) {
  const { register, handleSubmit, reset } = useForm("");
  const [mealAdded, setMealAdded] = useState(false);

  const handleStyle = () => {
    formState ? setFormState(false) : setFormState(true);
    setMealAdded(false);
  };

  const onSubmit = (data) => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    axios
      .post("/api/meals", data)
      .then((response) => {
        console.log(response.status);
        handleStyle();
        setMealAdded(true);
        reset({});
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container" ref={addMealRef}>
      <h4>Become a host, add a meal now.</h4>
      <button className="btn dark-btn" onClick={() => handleStyle()}>
        {formState ? "Add meal" : "Cancel"}
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mealForm"
        style={{ display: formState ? "none" : "flex" }}
      >
        <label>Title*</label>
        <input type="text" name="title" ref={register} required />
        <label>Description*</label>
        <textarea type="text" name="description" ref={register} required />
        <label>Location*</label>
        <input type="text" name="location" ref={register} required />
        <label>Date*</label>
        <input type="date" name="when" ref={register} required />
        <label>Price*</label>
        <input type="number" name="price" ref={register} required />
        <label>Max reservations*</label>
        <input type="number" name="max_reservations" ref={register} required />
        <input type="submit" className="submit-btn btn" />
        <br />
        <label>(*) required field.</label>
        <label>Note: submited information will be stored in database!</label>
      </form>
      {mealAdded && <p>Congratulations, meal added successfully!</p>}
    </div>
  );
}
