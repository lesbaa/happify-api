const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

console.log('starting server...')

const port = process.env.PORT || 8080

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Nonce, i')
  next()
}

app.use(allowCrossDomain)

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }))
app.use(bodyParser.json({ limit: '5mb' }))

/*
 *  API Routing
 */

const {
  getNiceGivenNasty,
  getNastyGivenNice,
  getAllSubs,
  postNewSub,
  getSubGivenId,
  deleteSub,
} = require('./modules/middleware')

app.use('*', (req, res, next) => {
  res.setHeader('X-Powered-By', 'Good News, Everyone! API V1')
  next()
})

router.route('/sub/nice/:nasty')
  .get(getNiceGivenNasty) // middleware is currently empty in this one

router.route('/sub/nasty/:nice')
  .get(getNastyGivenNice) // middleware is currently empty in this one

router.route('/sub/submit')
  .post(postNewSub) // middleware is currently empty in this one

router.route('/sub/:id')
  .get(getSubGivenId) // example in here of mongoose query
  .delete(deleteSub) // middleware is currently empty in this one

router.route('/subs')
  .get(getAllSubs) // middleware is currently empty in this one

router.route('*')
  .get((req, res) => {
    res.status(200)
    res.json({
      success: true,
      message: 'Welcome to \'Good News, Everyone!\' API v1.0',
    })
  })

app.use('/v1', router)

app.listen(port, () => {
  console.log(`> app listening on port ${port}, yay!`)
})
