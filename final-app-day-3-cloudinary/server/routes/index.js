const router = require("express").Router()

const coasterRoutes = require('./coasters.routes')
router.use('/coasters', coasterRoutes)

const uploadRoutes = require('./upload.routes')
router.use('/upload', uploadRoutes)

module.exports = router