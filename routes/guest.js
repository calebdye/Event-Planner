const express = require('express')
const router = express.Router()
const guestController = require('../controllers/guest') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, guestController.getGuests)

router.post('/createGuest', guestController.createGuest)

router.put('/markComplete', guestController.markComplete)

router.put('/markIncomplete', guestController.markIncomplete)

router.delete('/deleteGuest/:id', guestController.deleteGuest)

router.put('/editGuest/:id', guestController.editGuest)


module.exports = router