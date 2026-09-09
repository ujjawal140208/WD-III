const express = require("express")
const { getNotes, createNotes } = require("../controller/notesController")
const { isAuthorized, isLoggedIn } = require("../middlewares/isAuthorized")
const router = express.Router()

router.get("/notes",isAuthorized,isLoggedIn, getNotes)

router.post("/notes",createNotes)



module.exports = router