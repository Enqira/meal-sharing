import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mealPlate from "../assets/images/meal-plate.png";

export default function MealComp({ meal, reservations }) {
  const [reserve, setReserve] = useState(true);
  //format date
  let date = new Date(meal.when);
  date = date.toString().split(" ").slice(0, 5).join(" ");
  date = date.split(":").slice(0, 2).join(":");

  //   get reservations info for this meal
  const maxReservations = meal.max_reservations;
  let reserved = 0;
  reservations.map((reservation) => {
    if (reservation.meal_id === meal.id) {
      reserved += reservation.number_of_guests;
    }
  });
  let availableSeats = maxReservations - reserved;
  if (availableSeats <= 0) {
    availableSeats = "Fully booked";
  }

  //   get status depending on date
  let isActive = true;
  let mealDate = new Date(meal.when);
  mealDate = mealDate.getTime();
  const currentTime = Date.now();
  if (currentTime >= mealDate) isActive = false;

  useEffect(() => {
    //  show or not the reserve button depending on these conditions
    if (availableSeats === "Fully booked" || isActive === false) {
      setReserve(false);
    }
  }, []);

  return (
    <div className="meal-container">
      <div className="img-container">
        <img className="meal-img" src={mealPlate} alt="meal image" />
      </div>
      <div className="meal-info-container">
        <div className="meal-info-upper">
          <h3>{meal.title}</h3>

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
            <p>
              Max guests: <span>{`${maxReservations}`}</span>
            </p>
            <p>
              Available seats: <span>{`${availableSeats}`}</span>
            </p>
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
        <div>
          {reserve ? (
            <Link to={`/meals/${meal.id}`}>
              <button className="small-btn white-btn">reserve</button>
            </Link>
          ) : (
            <button className="small-btn white-btn">Sold out</button>
          )}
        </div>
      </div>
    </div>
  );
}
