const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();

const PORT = process.env.PORT || 3000

const app = express()

async function start() {
    try {
        await mongoose.connect(process.env.DB_CONN, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        })
    } catch(e){
        console.log(e)
        process.exit(1)
    }
}

start()

