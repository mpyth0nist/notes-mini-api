const Note = require('../models/notes.model')


exports.getAllNotes = async () => {
    const notes = await Note.find()
    return notes;
}

exports.getNoteById = (id) => {
    const note = Note.findById(id);
    if (!note) throw new Error('Note not found')
    return note
}

exports.createNewNote = (data) => {
    const newNote = new Note({
        title: data.title,
        content : data.content,
        author : data.author,
        tags: data.tags,
        createdAt: data.createdAt
        
    })

    const savedNote = newNote.save()

    return savedNote  
}

exports.updateNote = async (noteId, newData) => {
    let oldNote = await this.getNoteById(noteId).toObject()
    Object.keys(newData).forEach(key => {
        if(Object.hasOwn(oldNote, key)){
            oldNote[key] = newData[key]
        }
    })

    const updatedNote = await oldNote.save()

    if(!updatedNote) throw new Error('Failed to update note')
    
    return updatedNote
}

exports.deleteNote = async (id) => {
    const deleted = await Note.findByIdAndDelete(id)

    if(!deleted) throw new Error('Note does not exist')
    
    return deleted;
}