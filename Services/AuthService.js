const {User} = require('../db/index');


// app.use("/auth", auth)

// auth.post("/login", passport.authenticate('local', {
//     successRedirect:`/user/:${User.id}`,
//     failureRedirect: '/login'
// }))

// router.post("/signup", function(req, res, next){
//    const username = req.body.username
//     const userEmail = req.body.email

//    const isUserUnique = User.userExist(username, userEmail)

//     if(isUserUnique){

//     }



// })
  module.exports = class  AuthService {

    async addAdmin(res, req, done){
        User.create({
            username: 'Admin-Holt', 
            password:"jordanpass",
            email:"jordanh316@gmail.com", 
            firstName:"Jordan",
            lastName:"Holt", 
            dateOfBirth:"07/11/1988",
            role:"ADMIN"
        }).then((user)=>{
            return res.send(user)
        })

        
    }

   async register(data){
  

    try{
   const isUserUnique = await User.userExist(data.username, data.email);

   if(isUserUnique){
  const newUser = await User.create(data)
    function newUserLogin (err, req, next)  {
        if(err) {return next(err); }
        const user = {
            id: newUser.userID,
            username: newUser.userName 
        }

        req.login(user, function(err){
            if(err){return next(err);}
            next()

        })
    }

    await newUserLogin()
   }
    } catch(err){
        return new Error(err)
    }
   }

}

