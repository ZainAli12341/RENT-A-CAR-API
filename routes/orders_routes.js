const express = require('express')
const router = express.Router();
const orders_controllers = require('../controllers/orders_controllers')



router.post('/orders',orders_controllers.createOrders)
router.get('/orders',orders_controllers.getOrders)
router.delete('/orders',orders_controllers.deleteOrders)
router.get('/descriptive_orders',orders_controllers.viewTogether)

module.exports = router;