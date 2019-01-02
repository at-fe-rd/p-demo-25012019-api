// Import dependencies
const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth.controller')
const validate = require('express-validation')
const Validation = require('./documentation/userApi')

// /* User Login. */
router.post('/', validate(Validation.loginSchema), authCtrl.create)

/* User Logout. */
router.delete('/', authCtrl.delete)

module.exports = router
