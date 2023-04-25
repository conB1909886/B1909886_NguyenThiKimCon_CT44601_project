const express = require('express')
const router = express.Router()
const imageController = require('../controllers/imageController')

router.get('/',imageController.getAll)

router.get('/:id',imageController.getDetail)


router.post('/',imageController.create)

router.put('/:id',imageController.update)

router.delete('/',imageController.deleteMany)

router.delete('/:id',imageController.deleteOne)

module.exports = router