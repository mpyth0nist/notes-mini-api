
const Notes = require('../models/notes.model')

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Notes.find({})
        res.status(200).json(notes)
    }catch(err){
        return res.json({ message: err.message })
    }
}

exports.getNoteById = async(req, res) => {
    try {
        const note = await fetchNoteById(req.params.id)
        res.status(200).json(note)
    }catch(err){
        return res.json({ message : err.message })
    }
}

exports.createNote = async (req, res) => {}

exports.updateNote = async (req, res) => {}

exports.deleteNote = async (req, res) => {}