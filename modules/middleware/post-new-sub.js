const dbClient = require('../db-client')
const hash = require('string-hash')
// TODO, tidy this up, async await it les.
const middlewareFunc = (req, res, next) => {
  req.body
  if (!req.body || !req.body.nasty || !req.body.nice) {
    res.status(400)
    res.json({
      success: false,
      message: `bad request, not enough fields!`
    }) 
    return
  }
  const {
    nasty,
    nice,
  } = req.body
  const id = hash(nasty)
  newSub = new dbClient.Sub({
    id,
    nasty,
    nice,
  })
  const query = dbClient.Sub.where({ nice })
  const queryResult = query.findOne((err, doc) => {
    if (doc) {
      res.status(400)
      res.json({
        success: false,
        message: `why are you trying to be so nasty?`,
      })
      return
    }
    newSub.save((err, doc) => {
      if (err) {
        console.log(err.name)
        if (err.name === 'ValidationError') {
          res.status(400)
          res.json({
            success: false,
            message: `bad request, entry already exists!`
          })
          return
        } else {
          res.status(500)
          res.json({
            success: false,
            message: `internal server error!`
          })
          return
        }
      }
      if (doc) {
        res.status(200)
        res.json({
          success: true,
          message: 'new substitution added!',
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
    })
  })
}

module.exports = middlewareFunc
