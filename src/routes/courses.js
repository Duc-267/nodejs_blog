var express = require('express');
var router = express.Router();
const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.put('/:id', courseController.update)
router.delete('/:id', courseController.delete)
router.get('/:id/edit', courseController.edit)
router.get('/:slug', courseController.show)

module.exports = router