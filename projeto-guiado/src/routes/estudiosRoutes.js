const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')


router.post('/', controller.create)

router.get('/', controller.getAll)

router.delete('/:id', controller.deleteEstudio)

router.patch('/:id', controller.updateEstudio)

module.exports = router