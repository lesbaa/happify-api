const dbClient = require('../db-client')

const middlewareFunc = (req, res, next) => {
  if (!req.params || !req.params.id) {
    res.status(400)
    res.json({
      succes: false,
      message: `bad request sucka!`
    })
    return
  }
  const { id } = req.params
  dbClient.Sub.remove(
    { id },
    (err, doc) => {
      if (err) {
        console.log(err)
        res.status(500)
        res.json({
          success: false,
          message: 'internal server error!'
        })
      } else {
        res.json({
          success: true,
          message: 'sub successfuly removed',
          id
        })
      }
    }
  )
}

module.exports = middlewareFunc
