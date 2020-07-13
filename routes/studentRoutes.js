const { Router } = require('express')

const studentController = require('../controllers/studentController')

const router = Router()

// GET /api/students
router.get('/', async (req, res, next) => {
    try {
        const students = await studentController.getStudents()
        res.json(students)
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again1'})
    } finally {
        next()
    }
})

// GET /api/students/:id
router.get('/:id', async (req, res, next) => {
    try {
        const student = await studentController.getStudent(req.params.id)
        res.json(student)
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again2'})
    } finally {
        next()
    }
})


// POST /api/students/create
router.post('/create', async (req, res, next) => {
    try {
        const result = await studentController.addStudent(req.body)

        if(result) {
            res.status(201).json(res.data)
        } 
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again!'})
    } finally {
        next();
    }
})

// PUT /api/students/:id
router.put('/:id', async (req, res, next) => {
    try {
        const updatedStudent = await studentController.updateStudent(req.params.id, req.body)
        res.json(updatedStudent)
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again4'})
    } finally {
        next()
    }
})

// DELETE /api/students/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await studentController.deleteStudent(req.params.id)
        res.json(result)
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again5'})
    } finally {
        next()
    }
})

module.exports = router;