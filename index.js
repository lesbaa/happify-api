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
} = require('./modules/middleware')

app.use('*', (req, res, next) => {
  res.setHeader('X-Powered-By', 'Happify-API-V1')
  next()
})

router.route('/sub/nice/:nasty')
  .get( /* express middleware for get nasty, given nice */)

router.route('/sub/nasty/:nice')
  .get( /* express middleware for get nice, given nasty */)

router.route('/sub/:nasty/:nice')
  .post( /* express middleware add new sub */ )

router.route('/subs')
  .post( /* express middleware get all subs, with limit and offset */ )

app.use('/v1', router)

app.listen(port, () => {
  console.log(`> app listening on port ${port}`)
})
