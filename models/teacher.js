const { Schema, model } = require('mongoose');

const TeacherSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  subjects: [{ type: String }],
});

module.exports = model('Teacher', TeacherSchema);
