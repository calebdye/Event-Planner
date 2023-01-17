const express = require('express')
const router = express.Router()
const vendorController = require('../controllers/vendors') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, vendorController.getVendors)

router.post('/createVendor', vendorController.createVendor)

router.put('/markComplete', vendorController.markComplete)

router.put('/markIncomplete', vendorController.markIncomplete)

router.delete('/deleteVendor', vendorController.deleteVendor)

router.put('/editVendor', vendorController.editVendor)

module.exports = router