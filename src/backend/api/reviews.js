const express = require("express")
const router = express.Router()
const knex = require("../database")

// 	Returns all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await knex("reviews")
    res.json(reviews)
  } catch (error) {
    throw error
  }
})

// Returns reservation by id
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const review = await knex("reviews").where({
        id: req.params.id
      })
      res.send(review)
    }
  } catch (error) {
    throw error
  }
})

// 	Adds a new review
router.post("/", async (req, res) => {
  try {
    const addReview = await knex("reviews").insert({
      title: req.query.title,
      description: req.query.description,
      meal_id: req.query.meal_id,
      stars: req.query.stars
    })
    res.send("review added")
  } catch (error) {
    throw error
  }
})

// Updates the review by id
router.put("/:id", async (req, res) => {
  try {
    const updateReview = await knex("reviews")
      .where({ id: req.params.id })
      .update({
        stars: 4
      })
    res.send("Done")
  } catch (error) {
    throw error
  }
})

// Deletes the review by id
router.delete("/:id", async (req, res) => {
  try {
    const updateReview = await knex("reviews")
      .where({ id: req.params.id })
      .del()
    res.send("Done")
  } catch (error) {
    throw error
  }
})

module.exports = router
