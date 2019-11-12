let express = require('express')
let chatAPIContrller = require('./chatApiController')



const apiRouter = express.Router()

apiRouter.use((req,res,next) => {
    next();
})
apiRouter.post('/status',chatAPIContrller.status)

module.exports = apiRouter