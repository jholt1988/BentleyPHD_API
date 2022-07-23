
const { User, UserAddress } = require('../db')
const AddressService = require('../Services/AddressService');
const AddressServiceInsta = new AddressService()

module.exports = class userService {

  // Get all users.
  async getAllUsers() {
    const users = await User.findAll().then(async (users) => {


      return users

    })
    return users
  }

  // Get a user by username.
  async getUserByUsername(username) {
    const user = await User.findOne({ where: { username: username } }).then(async (user) => {
      if (user) {
        return user
      }
      return new Error("User Not Found. Check username and try again ")
    })
    return user
  }

  // Get a user by id
  async getUserByUserId(userId) {
    try {
      const user = await User.findByPk(userId).then((user) => {
        if (user) {
          return user
        }
        else {
          return new Error('User Not Found ')
        }


      })

        (user)
      return user
    }


    catch (err) {
      return new Error("User Not Found")
    }


  }

  // Updates a user.
  async updateUser(id, key, value) {

    (key, value)
    try {

      const user = await User.update({
        key: value
      }, { where: { userId: id } })


      return user
    } catch (err) {
      throw new Error(err)
    }


  }

  // Adds a user address.
  async addUserAddress(addressId, userId) {
    try {
      (userId)
      const user = await User.findByPk(userId)

        (user)
      const addAddr = await user.setAddress(addressId)
        (user.addresses)
      User.upsert({
        userId: user.userId,
        addresses: addAddr,
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        dateOFBirth: user.dateOFBirth,
        email: user.email,
        role: user.role
      }).then(([user, created]) => {
        return user
      })
      return addAddr
    } catch (err) {
      return new Error(err)
    }

  }


}
