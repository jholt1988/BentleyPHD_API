const { User } = require('../db/index');



module.exports = class AuthService {
//Used to create initial user
  // async addAdmin(res, req, done) {
  //   User.create({
  //     username: 'Admin-Holt',
  //     password: "jordanpass",
  //     email: "jordanh316@gmail.com",
  //     firstName: "Jordan",
  //     lastName: "Holt",
  //     dateOfBirth: "07/11/1988",
  //     role: "ADMIN"
  //   }).then((user) => {
  //     return res.send(user)
  //   })


  // }

  // Creates a new user.
  async register(data) {
    const newUser = await User.create(data).then(user => {
      return user
    })
    return newUser

  }
  catch(err) {
    return new Error(err)
  }

  // Logout a user.
  Logout(passport) {
    passport.logout()
  }


}



