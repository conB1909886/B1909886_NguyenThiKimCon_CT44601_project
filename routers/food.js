const express = require('express')
const router = express.Router()
const foodController = require('../controllers/foodController')


router.get('/',foodController.getAll)

router.get('/:id',foodController.getDetail)

router.post('/',foodController.create)

router.put('/:id',foodController.update)

router.delete('/',foodController.deleteMany)

router.delete('/:id',foodController.deleteOne)

module.exports = router