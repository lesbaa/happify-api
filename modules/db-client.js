/**
 *  Base set-up, import packages, set port.
 */

const mongoose = require('mongoose')

const dbName = 'db'
const models = {}
const modelsList = [
  'sub'
]

/*
 * db connect
 */

mongoose.Promise = global.Promise
try {
  if (mongoose.connection.readyState !== 2) {
    mongoose.connect(`mongodb://localhost/${dbName}`, {
      server: {
        socketOptions: {
          socketTimeoutMS: 0,
          connectTimeoutMS: 0,
        },
      },
    })
  }
} catch (err) {
  if (err) {
    console.error('mongoose connection error', err)
  }
}

/*
 * Load data model schemas from models directory and create model for each type in the directory
 */

modelsList.forEach((el, ind) => {
  const modelName = el.split('.')[0]
  models[modelName] = require(`../models/${modelName}.model`)
})

module.exports = models

// to import test data
// mongoimport --db test --collection restaurants --drop --file ~/downloads/primer-dataset.json
