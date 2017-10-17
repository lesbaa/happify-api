const mg = require('mongoose')
const Schema = mg.Schema
const uniqueValidator = require('mongoose-unique-validator')
const Sub = new Schema({
  id: { type: String, unique: true},
  nasty: { type: String, unique: true },
  nice: { type: String },
})

Sub.plugin(uniqueValidator)
module.exports = mg.model('Sub', Sub)
