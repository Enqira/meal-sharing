import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom"
import TestComponent from "./components/TestComponent/TestComponent"
import HeaderComp from "./components/HeaderComp"
import MainComp from "./components/MainComp"
import FooterComp from "./components/FooterComp"
import MealComp from "./components/MealComp"

function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

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
          <MainComp meals={meals} loading={loading} />
          <FooterComp />
        </Route>
        <Route exact path="/meals/:id">
          <HeaderComp />

          {!loading ? <MealComp meals={meals} /> : <div>loading...</div>}
          <FooterComp />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
