const express = require('express')
const router = express.Router()
const recoveryController=require('../controllers/harm_recovery_controllers')

router.post('/harm_recovery_from_customers',recoveryController.createRecoveries)
router.get('/harm_recovery_from_customers',recoveryController.getRecoveries)
router.put('/update_harm_recovery',recoveryController.updateRecoveries)
router.delete('/harm_recovery ',recoveryController.deleteRecovery)
router.get('/descriptive_harm_recovery',recoveryController.viewTogether) 
module.exports = router;