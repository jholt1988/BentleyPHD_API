const express = require('express');
const router = express.Router()
const AuthService = require('../Services/AuthService');
const auth = new AuthService();
const{User} = require('../db')
module.exports = (app, passport) =>{

app.use('/auth', router)
router.post("/login", passport.authenticate('local', {}), (req, res, next) =>{
     if(req.user){
      res.send(req.user)
     }
})

router.post('/register',  async function (err, res, req, done ) {
    if(err){ return done(err)}

  const data = {
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName, 
    lastName: req.body.lastName, 
    dateOfBirth: req.body.dateOfBirth, 
    email: req.body.email
  }
   const newUser =  auth.register(data)

    res.send(newUser)


})
}