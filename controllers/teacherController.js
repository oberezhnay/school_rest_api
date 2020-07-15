const mongoose = require('mongoose');
const Teacher = require('../models/teacher');

class teacherController {
  getTeachers() {
    const teachers = Teacher.find({});
    if (!teachers) {
      throw Error('Teachers not found');
    }
    return teachers;
  }

  getTeacher(id) {
    const teacher = Teacher.findById(id);
    if (!teacher) {
      throw Error('Teacher not found');
    }
    return teacher;
  }

  addTeacher(data) {
    const { firstName, lastName, subjects } = data;
    const newTeacher = new Teacher({ firstName, lastName, subjects });
    newTeacher.save();

    if (!newTeacher) {
      throw Error('Teacher wasn\'t added');
    }
    return newTeacher;
  }

  updateTeacher(id, data) {
    const { firstName, lastName, subjects } = data;
    Teacher.findByIdAndUpdate(id, { firstName, lastName, subjects }, { new: true }, function (err, updated) {
      mongoose.disconnect();
      if (err) {
        throw Error('Teacher wasn\'t updated');
      }
      return updated;
    });
  }

  deleteTeacher(id) {
    Teacher.findByIdAndDelete(id, function (err, deleted) {
      mongoose.disconnect();
      if (err) {
        throw Error('Teacher wasn\'t deleted');
      }
      return deleted;
    });
  }
}

module.exports = new teacherController();
