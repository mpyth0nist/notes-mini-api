const mongoose = require('mongoose')


const Author = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    
    lastName:{
        type: String,
        required: true
    },

})


const noteSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true, "I guess you forgot the title.."]
    },
    content: {
        type: String,
        required: [true, "Empty note? really?"]
    },
    author : {
        type: Author
    },
    tags : {
        type : [String]
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },

    lastUpdate: {
        type: Date
    }
})

module.exports = mongoose.model("Note", noteSchema)