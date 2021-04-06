import React, { useState, useEffect, useRef } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom"
import TestComponent from "./components/TestComponent/TestComponent"
import HeaderComp from "./components/HeaderComp"
import KnowMoreComp from "./components/KnowMoreComp"
import FooterComp from "./components/FooterComp"
import ReservComp from "./components/ReservComp"
import MealsComp from "./components/MealsComp"
import MealFormComp from "./components/MealFormComp"
import SearchComp from "./components/SearchComp"
import BackHomeComp from "./components/BackHomeComp"

function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [formState, setFormState] = useState(true)
  const [reservations, setReservations] = useState([])
  const [result, setResult] = useState(true)
  const topRef = useRef()
  const addMealRef = useRef()

  useEffect(() => {
    const mealCall = fetch("http://localhost:5000/api/meals")
    const reservCall = fetch(`http://localhost:5000/api/reservations`)
    Promise.all([mealCall, reservCall])
      .then(res => Promise.all(res.map(res => res.json())))
      .then(data => {
        console.log(data)
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
          <HeaderComp topRef={topRef} />
          <KnowMoreComp />
          <SearchComp
            meals={meals}
            setMeals={setMeals}
            loading={loading}
            setResult={setResult}
          />
          <MealsComp
            meals={meals}
            loading={loading}
            reservations={reservations}
            result={result}
            topRef={topRef}
          />
          <FooterComp />
        </Route>
        <Route exact path="/meals/:id">
          {!loading ? <ReservComp meals={meals} /> : <div>loading...</div>}
        </Route>
        <Route exact path="/meals">
          <BackHomeComp />
          <MealFormComp
            formState={formState}
            setFormState={setFormState}
            addMealRef={addMealRef}
          />
          <MealsComp
            meals={meals}
            loading={loading}
            reservations={reservations}
            result={result}
            addMealRef={addMealRef}
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
