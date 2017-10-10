const mg = require('mongoose')
const Schema = mg.Schema

const Sub = new Schema({
  id: { type: String },
  nasty: { type: String },
  nice: { type: String },
})

module.exports = mg.model('Sub', Sub)
