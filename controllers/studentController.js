const mongoose = require('mongoose');
const Student = require('../models/student');

class studentController {
  getStudents() {
    const students = Student.find({});
    if (!students) {
      throw Error('Students not found');
    }
    return students;
  }

  getStudent(id) {
    const student = Student.findById(id);
    if (!student) {
      throw Error('Student not found');
    }
    return student;
  }

  addStudent(data) {
    const { firstName, lastName } = data;
    const newStudent = new Student({ firstName, lastName });
    newStudent.save();

    if (!newStudent) {
      throw Error('Student wasn\'t added');
    }
    return newStudent;
  }

  updateStudent(id, data) {
    const { firstName, lastName } = data;
    Student.findByIdAndUpdate(id, { firstName, lastName }, { new: true }, function (err, updated) {
      mongoose.disconnect();
      if (err) {
        throw Error('Student wasn\'t updated');
      }
      return updated;
    });
  }

  deleteStudent(id) {
    Student.findByIdAndDelete(id, function (err, deleted) {
      mongoose.disconnect();
      if (err) {
        throw Error('Student wasn\'t deleted');
      }
      return deleted;
    });
  }
}

module.exports = new studentController();
