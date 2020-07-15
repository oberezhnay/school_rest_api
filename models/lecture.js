const { Schema, model, Types } = require('mongoose');

const LectureSchema = new Schema({
  subject: { type: String, required: true },
  teacher: { type: Types.ObjectId, ref: 'Teacher', required: true },
  studentsGroup: [{ type: Types.ObjectId, ref: 'Student', require: true }],
  auditory: { type: Number, required: true },
  date: { type: Date, required: true },
  lectureOrder: { type: Number, required: true },
});

module.exports = model('Lecture', LectureSchema);
