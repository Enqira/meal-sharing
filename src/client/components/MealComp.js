import React from "react"
import { Link } from "react-router-dom"

export default function MealComp({ meal, reservations }) {
  //format date
  let date = new Date(meal.when)
  date = date.toString().split(" ").slice(0, 5).join(" ")
  date = date.split(":").slice(0, 2).join(":")

  //   get reservations info for this meal
  const maxReservations = meal.max_reservations
  let reserved = 0
  reservations.map(reservation => {
    if (reservation.meal_id === meal.id) {
      reserved += reservation.number_of_guests
    }
  })
  let availableSeats = maxReservations - reserved
  if (availableSeats <= 0) {
    availableSeats = "Fully booked"
  }

  //   get status depending on date
  let isActive = true
  let mealDate = new Date(meal.when)
  mealDate = mealDate.getTime()
  const currentTime = Date.now()
  if (currentTime >= mealDate) isActive = false

  return (
    <div className="meal-comtainer">
      <div className="img-container">
        <img className="meal-img" src="/public/meal-img.jpg" alt="meal image" />
      </div>
      <div className="meal-info-container">
        <div className="meal-info-upper">
          <Link to={`/meals/${meal.id}`}>
            <h3>{meal.title}</h3>
          </Link>
          <p className="meal-description">{meal.description}</p>
        </div>
        <div className="meal-info-lower">
          <div className="meal-info-left">
            <p>
              Location: <span>{meal.location} </span>
            </p>
            <p>
              Price: <span>{meal.price}</span>
            </p>
          </div>
          <div className="meal-info-right">
            <p>{/* Max guests: <span>{`${maxReservations}`}</span> */}</p>
            <p>{/* Available seats: <span>{`${availableSeats}`}</span> */}</p>
          </div>
          <div>
            <p>
              Date: <span>{date}</span>
            </p>
            <p>
              Status: <span>{isActive ? "Upcoming" : "Ended"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
