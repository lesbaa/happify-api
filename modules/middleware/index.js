const getAllSubs = require('./get-all-subs')
const getNiceGivenNasty = require('./get-nice-given-nasty')
const getNastyGivenNice = require('./get-nice-given-nasty')
const postNewSub = require('./post-new-sub')
const getSubGivenId = require('./get-sub-given-id')
const deleteSub = require('./delete-sub')

module.exports = {
  getAllSubs,
  getNiceGivenNasty,
  getNastyGivenNice,
  postNewSub,
  getSubGivenId,
  deleteSub,
}
