const express = require('express')
const router = express.Router()
const todosController = require('../controllers/mainHome') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)



module.exports = router