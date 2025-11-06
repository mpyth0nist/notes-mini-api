const express = require('express')
const controller = require('../controllers/notes.controller')
// Calling the Router method inside Express
const router = express.Router()

router.get('/', controller.getAllNotes)

router.get('/:id', controller.getNoteById)

router.post('/', controller.createNote)

router.patch('/:id', controller.updateNote)

router.delete('/:id', controller.deleteNote)

module.exports = router;
