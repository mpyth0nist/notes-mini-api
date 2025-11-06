
const notesService = require('../services/notes.service')


exports.getAllNotes = async (req, res) => {
    try {
        const notes = await notesService.getAllNotes()
        res.status(200).json(notes)
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

exports.getNote = async(req, res) => {
    try {
        const note = await notesService.getNoteById(req.params.id)
        res.status(200).json(note)
    }catch(err){
        return res.json({ message : err.message })
    }
}

exports.createNote = async (req, res) => {
    try {
        const createdNote = await notesService.createNewNote(req.body)
        res.status(201).json(createdNote)
    }catch(err){
        return res.status(400).json({ message : err.message })
    }
}

exports.updateNote = async (req, res) => {

    try{
        const updated = await notesService.updateNote(req.params.id)
        res.status(200).json(updated)
    }catch(err) {
        return res.status(404).json({ message : err.message })
    }
}

exports.deleteNote = async (req, res) => {

    try{
        const deleted = await notesService.deleteNote(req.params.id)
        res.status(202).json(deleted)
    }catch(err){
        return res.status(404).json({ message: err.message })
    }
}