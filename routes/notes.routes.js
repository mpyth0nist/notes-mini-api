const express = require('express')
const notesController = require('../controllers/notes.controller')
// Calling the Router method inside Express
const router = express.Router()

router.get('/', notesController.getAllNotes)

router.get('/:id', notesController.getNote)

router.post('/', notesController.createNote)

router.patch('/:id', notesController.updateNote)

router.delete('/:id', notesController.deleteNote)

module.exports = router;
