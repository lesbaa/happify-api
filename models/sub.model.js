const mg = require('mongoose')
const Schema = mg.Schema

const Sub = new Schema({
  nasty: { type: String },
  nice: { type: String },
})