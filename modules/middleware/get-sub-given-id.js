const dbClient = require('../db-client')
const middlewareFunc = (req, res, next) => {
  console.log(dbClient)
  const { id } = req.params // taken from the :id bit in the route
  dbClient.Sub.findOne(
    { id }, // the criteria for the db query
    {}, // the fields of the doc to return
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
