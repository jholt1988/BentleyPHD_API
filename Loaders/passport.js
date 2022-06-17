const passport = require('passport');
const LocalStrategy = require('passport-local')
// const Auth = require('../Services/AuthService');
const logger = require('morgan');
const { User } = require('../db');


module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(logger('combined'))

    passport.serializeUser((function (user, done) {
        console.log(`${user.username} serialized`)
         done(null, {id:user.id, username:user.username})
        }))
    

    passport.deserializeUser(function({id:id, done:{error, user}}) {
        
            done(null, user)
        
        
        
    })

    passport.use('local', new LocalStrategy(
         async function (username, password, done) {
        try{
         const authUser = await User.findOne({where: {username: username}})
    
         const hashpass = authUser ? authUser.password : ""
          

         if( await User.validatePassword(password, hashpass)

         ){
             done(null, authUser)
         }

         else {
             done(error, false)
         } 
        }catch (err) {
            console.log("Something Went Wrong", Error())
        }
    
            
        })
    )
    
        
                
                    
    return passport
                
}