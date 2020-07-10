const { Schema, model, Types} = require('mongoose')

const SubjectSchema = new Schema({
    subject: {type: String, required: true}
})

module.exports = model('Subject', SubjectSchema)