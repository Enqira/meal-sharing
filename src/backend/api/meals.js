const express = require("express")
const router = express.Router()
const knex = require("../database")

router.get("/", async (req, res) => {
  try {
    if (req.query.id) {
      const meal = await knex("meals").where({ id: req.query.id })
      res.send(meal)
      return
    }
    // knex syntax for selecting things.
    const meals = await knex("meals").select("title")
    console.log(meals)
    res.json(meals)
  } catch (error) {
    throw error
  }
})
router.post("/", async (req, res) => {
  try {
    console.log("post meals")
    const addMeal = await knex("meals").insert({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      when: req.body.when,
      max_reservations: req.body.max_reservations,
      price: req.body.price
    })
    res.send("Done")
  } catch (error) {
    throw error
  }
})

module.exports = router
