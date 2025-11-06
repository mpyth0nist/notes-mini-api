require('dotenv').config()
const express = require('express')
const app = express()

// Port at which our server runs.
const PORT = process.env.PORT

// logger middleware
const morgan = require('morgan')

const mongoose = require('mongoose');


mongoose.set("strictQuery", false);

// Define the database URL to connect to
const mongoDB = "mongodb://localhost/my_database"

// Wait for database to connect, logging error if it happened.
main().catch((err) => console.log(err))

async function main(){
    await mongoose.connect(mongoDB)
}

app.use(morgan('dev'))
app.use(express.json())


const notesRouter = require('./routes/notes.routes')
app.use('/notes', notesRouter)

app.listen(PORT, () => {
    console.log(`Server started on port :${PORT}`)
})