const Notes = require('../models/notes.model')


exports.fetchAll = () => {
    const notes = Notes.find({})
    return notes;
}

exports.fetchById = (id) => {
    const note = Notes.findById(id);
    if (!note) throw new Error('Note not found')
}