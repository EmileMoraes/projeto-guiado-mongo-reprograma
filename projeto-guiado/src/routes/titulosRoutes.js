const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')


router.post('/', controller.createTitle)

router.get('/', controller.showTitle)

router.get('/marvel', controller.marvelTitles)
router.get('/pixar', controller.pixarTitles)
router.get('/disney', controller.disneyTitles)

router.delete('/:id', controller.deleteTitle)

router.patch('/:id', controller.updateTitle)
module.exports = router
