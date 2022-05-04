const Users = require('../../Users/users-model')


async function checkIfUsernameIsUnique(req, res, next) {
    try {
        const users = await Users.findBy({ username: req.body.username })
        if (!users.length) {
          next()
        } else {
          next({ status: 422, message: 'username taken' })
        }
      } catch (err) {
        next(err)
      }
    }

 function validateLogin (req, res, next) {
    if (!req.body.username || typeof req.body.username !== 'string') {
      next({ status: 400, message: 'username and password required' })
    } else if (!req.body.password || typeof req.body.password !== 'string') {
      next({ status: 400, message: 'username and password required' })
    } else {
      req.user = {
        username: req.body.username, 
        password: req.body.password,
      }
      next()
    }
  }

module.exports = {
    checkIfUsernameIsUnique, 
    validateLogin, 
}