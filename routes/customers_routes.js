const express = require('express')
const router = express.Router()
const customersController = require('../controllers/customers_controllers')

router.post('/customers',customersController.createCustomers)
router.get('/customers',customersController.getCustomers)
router.delete('/customers',customersController.DeleteCustomers)

module.exports = router;