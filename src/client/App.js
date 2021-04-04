import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom"
import TestComponent from "./components/TestComponent/TestComponent"
import HeaderComp from "./components/HeaderComp"
import TitleComp from "./components/TitleComp"
import FooterComp from "./components/FooterComp"
import ReservComp from "./components/ReservComp"
import MealsComp from "./components/MealsComp"
import MealFormComp from "./components/MealFormComp"
import SearchComp from "./components/SearchComp"

function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [formState, setFormState] = useState(true)
  const [reservations, setReservations] = useState([])
  //   const [loadingReserv, setLoadingReserv] = useState(true)

  useEffect(() => {
    const mealCall = fetch("http://localhost:5000/api/meals")
    const reservCall = fetch(`http://localhost:5000/api/reservations`)
    Promise.all([mealCall, reservCall])
      .then(res => Promise.all(res.map(res => res.json())))
      .then(data => {
        setMeals(data[0])
        setReservations(data[1])
      })
      .catch(err => {
        console.log(err.message)
        alert(err)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeaderComp />
          <TitleComp />
          <SearchComp meals={meals} setMeals={setMeals} loading={loading} />
          <MealsComp
            meals={meals}
            loading={loading}
            reservations={reservations}
          />
          <FooterComp />
        </Route>
        <Route exact path="/meals/:id">
          {!loading ? <ReservComp meals={meals} /> : <div>loading...</div>}
        </Route>
        <Route exact path="/meals">
          <MealFormComp formState={formState} setFormState={setFormState} />
          <MealsComp
            meals={meals}
            loading={loading}
            reservations={reservations}
          />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
