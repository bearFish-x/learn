var User = require('../lib/mongo').User

module.exports = {
  create (user) {
    return User.create(user).exec()
  },

  getUserByName (name) {
    return User
      .findOne({ name })
      .addCreatedAt()
      .exec()
      .catch(err=>console.info(err))
  }
}