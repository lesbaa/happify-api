const dbClient = require('../db-client')

const middlewareFunc = (req, res, next) => {
  if (!req.params || !req.params.nasty) {
    res.status(400)
    res.json({
      succes: false,
      message: `bad request sucka!`
    })
    return
  }
  const { nasty } = req.params
  dbClient.Sub.findOne(
    { nasty },
    {},
    (err, doc) => { // the callback, error comes first, then mongodb document
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
      }
      res.status(404)
      res.json({
        success: false,
        message: 'resource not found!',
      })
      return
    }
  )
}

module.exports = middlewareFunc
