const express = require("express")
const { getNotes, createNotes } = require("../controller/notesController")
const router = express.Router()

router.get("/notes",getNotes)

router.post("/notes",createNotes)

module.exports = router