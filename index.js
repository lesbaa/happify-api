const express = require('express')
const bodyParser = require('body-parser')
const app = express()

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
app.use('/', (req, res, next) => {
  res.setHeader('X-Powered-By', 'Happify API V1')
  next()
})