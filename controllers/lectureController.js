const mongoose = require('mongoose');
const Lecture = require('../models/lecture');

class lectureController {
  getLectures() {
    const lectures = Lecture.find({});
    if (!lectures) {
      throw Error('Lectures not found');
    }
    return lectures;
  }

  getLecture(id) {
    const lecture = Lecture.findById(id);
    if (!lecture) {
      throw Error('Lecture not found');
    }
    return lecture;
  }

  addLecture(data) {
    const { subject, teacher, studentsGroup, auditory, date, lectureOrder } = data;
    const newLecture = new Lecture({
      subject,
      teacher,
      studentsGroup,
      auditory,
      date,
      lectureOrder,
    });
    newLecture.save();

    if (!newLecture) {
      throw Error('Lecture wasn\'t added');
    }
    return newLecture;
  }

  updateLecture(id, data) {
    const { subject, teacher, studentsGroup, auditory, date, lectureOrder } = data;
    Lecture.findByIdAndUpdate(id, { subject, teacher, studentsGroup, auditory, date, lectureOrder }, { new: true }, function (err, updated) {
      mongoose.disconnect();
      if (err) {
        throw Error('Lecture wasn\'t updated');
      }
      return updated;
    });
  }

  deleteLecture(id) {
    Lecture.findByIdAndDelete(id, function(err, deleted) {
      mongoose.disconnect();
      if (err) {
        throw Error('Lecture wasn\'t deleted');
      }
      return deleted;
    });
  }
}

module.exports = new lectureController();
