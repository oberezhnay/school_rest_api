const { Router } = require('express');
const teacherController = require('../controllers/teacherController');

const router = Router();

// GET /api/teachers
router.get('/', async (req, res, next) => {
  try {
    const teachers = await teacherController.getTeachers();
    res.json(teachers);
  } catch (e) {
    res.status(500).json({ message: 'Something go wrong, try again' });
  } finally {
    next();
  }
});

// GET /api/teachers/:id
router.get('/:id', async (req, res, next) => {
  try {
    const teacher = await teacherController.getTeacher(req.params.id);
    res.json(teacher);
  } catch (e) {
    res.status(500).json({ message: 'Something go wrong, try again' });
  } finally {
    next();
  }
});

// POST /api/teachers
router.post('/create', async (req, res, next) => {
  try {
    const result = await teacherController.addTeacher(req.body);
    if (result) {
      res.status(201).json(res.data);
    }
  } catch (e) {
    res.status(500).json({ message: 'Something go wrong, try again' });
  } finally {
    next();
  }
});

// PUT /api/teacher/:id
router.put('/:id', async (req, res, next) => {
  try {
    const updatedTeacher = await teacherController.updateTeacher(req.params.id, req.body);
    res.json(updatedTeacher);
  } catch (e) {
    res.status(500).json({ message: 'Something go wrong, try again' });
  } finally {
    next();
  }
});

// DELETE /api/teacher/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await teacherController.deleteTeacher(req.params.id);
    res.json(result);
  } catch (e) {
    res.status(500).json({ message: 'Something go wrong, try again' });
  } finally {
    next();
  }
});

module.exports = router;
