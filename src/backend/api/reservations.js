const express = require("express")
const router = express.Router()
const knex = require("../database")

// 	Returns all reservations or just reservations with meal_id = id
router.get("/", async (req, res) => {
  const id = req.query.meal_id
  try {
    if (id) {
      const reservations = await knex("reservations").where("meal_id", id)

      res.send(reservations)
    } else {
      const reservations = await knex("reservations")
      res.json(reservations)
    }
  } catch (error) {
    throw error
  }
})

// Returns reservation by id
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const reservation = await knex("reservations").where("id", req.params.id)

      res.send(reservation)
    }
  } catch (error) {
    throw error
  }
})

//return reservations by meal_id
// router.get("/", async (req, res) => {
//   try {
//     if (req.params.id) {
//       const reservation = await knex("reservations").where("id", req.params.id)

//       res.send(reservation)
//     }
//   } catch (error) {
//     throw error
//   }
// })

// 	Adds a new reservation
router.post("/", async (req, res) => {
  try {
    console.log(`this is the request ${req.body.id}`)
    const addreservation = await knex("reservations").insert({
      number_of_guests: req.body.guests,
      meal_id: req.body.id,
      contact_phonenumber: req.body.phone,
      contact_name: req.body.name,
      contact_email: req.body.email
    })
    res.send("reservation added")
  } catch (error) {
    throw error
  }
})

// Updates the reservation by id
router.put("/:id", async (req, res) => {
  try {
    const updatereservation = await knex("reservations")
      .where({ id: req.params.id })
      .update({
        contact_phonenumber: 01234567
      })
    res.send("Done")
  } catch (error) {
    throw error
  }
})

// Deletes the reservation by id
router.delete("/:id", async (req, res) => {
  try {
    const updatereservation = await knex("reservations")
      .where({ id: req.params.id })
      .del()
    res.send("Done")
  } catch (error) {
    throw error
  }
})

module.exports = router
