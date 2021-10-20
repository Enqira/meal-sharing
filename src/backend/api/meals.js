const express = require("express");
const router = express.Router();
const knex = require("../database");

// 	Returns all meals
router.get("/", async (req, res) => {
  try {
    console.log("working");
    const maxPrice = req.query.maxPrice;
    const availableReservations = req.query.availableReservations;
    const title = req.query.title;
    const createdAfter = req.query.createdAfter;
    const limit = req.query.limit;

    // maxPrice
    if (maxPrice) {
      const result = await knex("meals").where("price", "<", maxPrice);
      res.send(result);
    }
    // Get meals that still has available reservations
    else if (availableReservations) {
      const result = await knex("meals").where("max_reservations", ">", 0);
      res.send(result);
    }
    // Get meals that partially match a title
    else if (title) {
      const result = await knex("meals").where("title", "like", `%${title}%`);
      res.send(result);
    }
    // Get meals that has been created after the date
    else if (createdAfter) {
      const newDate = new Date(createdAfter);
      const result = await knex("meals").where("when", ">", newDate);
      res.send(result);
    }
    // Only specific number of meals
    else if (limit) {
      const result = await knex("meals").limit(limit);
      res.send(result);
    }
    // knex syntax for selecting things.
    const meals = await knex("meals");
    res.json(meals);
  } catch (error) {
    throw error;
  }
});

// 	Adds a new meal
router.post("/", async (req, res) => {
  try {
    console.log("post meals");
    const addMeal = await knex("meals").insert({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      when: req.body.when,
      max_reservations: req.body.max_reservations,
      price: req.body.price,
    });
    res.send(req.body);
  } catch (error) {
    throw error;
  }
});

// Returns meal by id
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const meal = await knex("meals").where({ id: req.params.id });
      res.send(meal);
      console.log("got it");
    }
  } catch (error) {
    throw error;
  }
});

// Updates the meal by id
router.put("/:id", async (req, res) => {
  try {
    const updateMeal = await knex("meals").where({ id: req.params.id }).update({
      max_reservations: 0,
    });
    res.send("Done");
  } catch (error) {
    throw error;
  }
});

// Deletes the meal by id
router.delete("/:id", async (req, res) => {
  try {
    const updateMeal = await knex("meals").where({ id: req.params.id }).del();
    res.send("Done");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
