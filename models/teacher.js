const { Schema, model, Types} = require('mongoose')

const TeacherSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    subjects: [{type: Types.ObjectId, ref:'Subject'}]
})

module.exports = model('Teacher', TeacherSchema)