const express = require('express')
const router = express.Router()
const guestController = require('../controllers/budget') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, guestController.getBudget)

router.post('/createBudget', guestController.createBudget)

router.put('/markComplete', guestController.markComplete)

router.put('/markIncomplete', guestController.markIncomplete)

router.delete('/deleteBudget/:id', guestController.deleteBudget)

router.put('/editBudget/:id', guestController.editBudget)


module.exports = router