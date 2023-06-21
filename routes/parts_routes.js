const express = require('express')
const router = express.Router()
const partsController = require('../controllers/parts_controllers')


router.post('/part',partsController.createParts)
router.get('/parts',partsController.getParts)





module.exports = router;
