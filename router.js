let express = require("express")

const router = express.Router()

router.use('/api/v1/ChatApis',require('./ChatAPIs/ChatAPIRouter'))

module.exports = router