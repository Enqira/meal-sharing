import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import TestComponent from "./components/TestComponent/TestComponent"
import HeaderComp from "./components/HeaderComp"
import FooterComp from "./components/FooterComp"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <HeaderComp />
        <FooterComp />
        <p></p>
      </Route>
      <Route exact path="/lol">
        <p>lol</p>
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  )
}

export default App
