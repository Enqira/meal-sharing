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
import MealComp from "./components/MealComp"
import MealsComp from "./components/MealsComp"
import MealFormComp from "./components/MealFormComp"

function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [formState, setFormState] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/meals")
      .then(res => res.json())
      .then(data => {
        setMeals(data)
        setLoading(false)
      })
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeaderComp />
          <TitleComp />
          <MealsComp meals={meals} loading={loading} />
          <FooterComp />
        </Route>
        <Route exact path="/meals/:id">
          {!loading ? <MealComp meals={meals} /> : <div>loading...</div>}
        </Route>
        <Route exact path="/meals">
          <MealFormComp formState={formState} setFormState={setFormState} />
          <MealsComp meals={meals} loading={loading} />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
