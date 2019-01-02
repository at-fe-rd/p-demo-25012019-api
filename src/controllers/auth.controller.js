const User = require('../models').User
const asyncMiddleware = require('../helper/publicFunction')

module.exports = {
  login: asyncMiddleware(async (req, res, next) =>  {
    
  }),
  logout: asyncMiddleware( async (req, res, next) =>  {
    
  })
}
