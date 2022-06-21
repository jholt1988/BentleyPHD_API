const express = require('express');
const router = express.Router()
const AuthService = require('../Services/AuthService');
const auth = new AuthService();
const{User} = require('../db');
const moment = require('moment')
module.exports = (app, passport) =>{

app.use('/auth', router)
router.post("/login", passport.authenticate('local', {}), (req, res, next) =>{
     if(req.user){
      res.send(req.user)
     }
})

router.post('/register',  async function (req, res, next) {
          const dateOfBirth = moment(req.body.dateOfBirth).toISOString()
    const data = {
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth:dateOfBirth,
      email: req.body.email, 
      role: req.body.role
    };
    try{
    const newUser =  await auth.register(data);
  
        
     if(newUser instanceof User){
     req.login(newUser, (error) => {
        if (error) { return next(error); }
       return  res.redirect('/users' + req.user.userId);
    })   
        

      }
    ;
    } catch(err){
      res.send(new Error(err))
    }
    
  }, () => {
    next()
  })
}