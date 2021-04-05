import React from "react"
import ReactDOM from "react-dom"
import "./style/index.css"
import "./style/luminance.css"
import "./style/meal.css"
import "./style/footer.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)

serviceWorker.unregister()
