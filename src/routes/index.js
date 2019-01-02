const express = require('express')
const userRoutes = require('./user.routes')
const authRoutes = require('./auth.routes')

const router = express.Router();

/** GET / - Check service health */
router.get('/api', (req, res) =>
  res.send('OK man')
)

router.use('/api/users', userRoutes)
router.use('/api/auth', authRoutes)


module.exports = router
