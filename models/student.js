const { Schema, model, Types} = require('mongoose')

const StudentSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    subjects: [{type: Types.ObjectId, ref:'Lecture'}]
})

module.exports = model('Student', StudentSchema)