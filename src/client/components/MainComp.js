import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MealsComp from "./MealsComp"

export default function MainComp({ meals, loading }) {
  return (
    <section className="main-component">
      <h1 className="title">Welcome to FoodFood</h1>
      <h3>The best international dishes</h3>
      {!loading ? <MealsComp meals={meals} /> : <div>loading...</div>}
    </section>
  )
}
