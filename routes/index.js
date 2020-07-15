const lectureRoutes = require('./lectureRoutes');
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');

module.exports = (app) => {
  app.use('/api/lectures', lectureRoutes);
  app.use('/api/students', studentRoutes);
  app.use('/api/teachers', teacherRoutes);
};
