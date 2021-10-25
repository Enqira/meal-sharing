import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MealComp from "./MealComp";

export default function MealsComp({
  meals,
  loading,
  reservations,
  result,
  topRef,
  addMealRef,
}) {
  const [showOption, setShowOption] = useState("all");
  const [sortOption, setSortOption] = useState("latest");
  const [newMeals, setNewMeals] = useState(meals);

  const handleShowChange = (e) => {
    setShowOption(e.target.value);
  };
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sort = (array) => {
    switch (sortOption) {
      case "lower-price":
        return array.sort((a, b) => a.price - b.price);
      case "higher-price":
        return array.sort((a, b) => b.price - a.price);
      case "oldest":
        return array.sort(
          (a, b) => new Date(a.created_date) - new Date(b.created_date)
        );
      default:
        return array.sort(
          (a, b) => new Date(b.created_date) - new Date(a.created_date)
        );
    }
  };
  useEffect(() => {
    const currentTime = Date.now();

    if (!loading) {
      //   -----------------------

      // ------------------------

      switch (showOption) {
        case "upcoming":
          const upcomingMeals = meals.filter(
            (meal) => Date.parse(meal.when) > currentTime
          );

          setNewMeals(upcomingMeals);
          break;
        case "ended":
          const endedMeals = meals.filter(
            (meal) => Date.parse(meal.when) < currentTime
          );
          setNewMeals(endedMeals);
          break;
        case "all":
          setNewMeals(meals);
          break;
      }
      //   ------------------------------
    }
  }, [showOption, loading, meals, sortOption, result]);

  //   for go top arrow

  const handleArrowClick = () => {
    addMealRef && addMealRef.current.scrollIntoView({ behavior: "smooth" });
    topRef && topRef.current.scrollIntoView({ behavior: "smooth" });
  };
  //   finished

  return (
    <section className="main-component">
      <div className="main-component-form">
        <form>
          <label>
            <span className="select-span"> Show:</span>
            <select value={showOption} onChange={handleShowChange}>
              <option value="all">All</option>
              <option value="upcoming">Upcoming</option>
              <option value="ended">Ended</option>
            </select>
          </label>
        </form>

        <form>
          <label>
            <span className="select-span"> Sort by:</span>
            <select value={sortOption} onChange={handleSortChange}>
              <option value="latest">Latest created</option>
              <option value="oldest">Oldest created</option>
              <option value="lower-price">Lowest price</option>
              <option value="higher-price">Highest price</option>
            </select>
          </label>
        </form>
      </div>
      {!loading ? (
        <div className="meals">
          {sort(newMeals).map((meal) => (
            <MealComp meal={meal} key={meal.id} reservations={reservations} />
          ))}
          <div
            className="no-result"
            style={{ display: result ? "none" : "flex" }}
          >
            No results found!
          </div>
        </div>
      ) : (
        <div className="loading">loading...</div>
      )}
      <div className="go-top">
        <div className="arrow-container">
          <div
            className="arrow"
            id="arrow-bottom"
            onClick={handleArrowClick}
          ></div>
        </div>
        <h3 className="go-top-text" onClick={handleArrowClick}>
          Go to the top!
        </h3>
      </div>
    </section>
  );
}
