const { Router } = require('express')

const lectureController = require('../controllers/lectureController')

const router = Router()

// GET /api/lectures
router.get('/', async (req, res, next) => {
    try {
        const lectures = await lectureController.getLectures()
        res.json(lectures)
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again'})
    } finally {
        next()
    }
})

// GET /api/lectures/:id
router.get('/:id', async (req, res, next) => {
    try {
        const lecture = await lectureController.getLecture(req.params.id)
        res.json(lecture)
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again'})
    } finally {
        next()
    }
})

// POST /api/lectures/create
router.post('/create', async (req, res) => {
    try {
        
        const result = await lectureController.addLecture(req.body)
        if(result) {
            res.status(201).json(res.data)
        }
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again'})
    }
})

// PUT /api/lectures/:id
router.put('/:id', async (req, res, next) => {
    try {
        const updatedLecture = await lectureController.updateLecture(req.params.id, req.params.body)
        res.json(updatedLecture)
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again'})
    } finally {
        next()
    }
})

// DELETE /api/lectures/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await lectureController.deleteLecture(req.params.id)
        res.json(result)
    } catch(e) {
        res.status(500).json({message: 'Something go wrong, try again'})
    } finally {
        next()
    }
})

module.exports = router;