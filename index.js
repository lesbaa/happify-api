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
  res.setHeader('X-Powered-By', 'Happify-API-V1')
  next()
})

router.route('/sub/nice/:nasty')
  .get(getNiceGivenNasty)

router.route('/sub/nasty/:nice')
  .get(getNastyGivenNice)

router.route('/sub/:nasty/:nice')
  .post(postNewSub)

router.route('/sub/:id')
  .get(getSubGivenId)
  .delete(deleteSub)

router.route('/subs')
  .get(getAllSubs)


app.use('/v1', router)

app.listen(port, () => {
  console.log(`> app listening on port ${port}`)
})
