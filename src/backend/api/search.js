const express = require("express")
const router = express.Router()
const knex = require("../database")

router.get("/:title", async (req, res) => {
  try {
    console.log(req.params.title)
    const title = req.params.title
    const result = await knex("meals").where("title", "like", `%${title}%`)
    res.json(result)
  } catch (error) {
    throw error
  }
})

module.exports = router
