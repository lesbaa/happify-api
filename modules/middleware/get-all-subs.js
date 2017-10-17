const dbClient = require('../db-client')

const middlewareFunc = (req, res, next) => {
  dbClient.Sub.find(
    {},
    {},
    (err, doc) => {
      if (err) {
        console.log(err)
        res.status(500)
        res.json({
          succes: false,
          message: `internal server error!`
        }) // express repsonse object, .json() sends repsonse as json data, (duh)
        return
      }
      if (doc) {
        res.status(200)
        res.json({
          success: true,
          message: 'query successful!',
          data: doc,
        })
        return
      } else {
        res.status(404)
        res.json({
          success: false,
          message: 'resource not found!',
        })
      }
    }
  )
}

module.exports = middlewareFunc
