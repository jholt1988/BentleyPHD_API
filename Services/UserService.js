const {User} = require('../db')

module.exports = class userService{
 async getAllUsers(){
  const users = await User.findAll().then(async (users) =>{


    return users

  })
  return users
 }

 async getUserByUsername(username){
    const user =  await User.findOne({where:{username: username}}).then( async (user) =>{
       if(user){
        return user
       }
        return new Error("User Not Found. Check username and try again ")
    })
    return user
 }

 async getUserByUserId(userId){
    try{
    const user = await User.findByPk(userId).then(( user) => {
        if(user){
            return user
          }
        else{
            return new Error('User Not Found ')
        }
    
    
    })
}


   catch(err){
         return new Error("User Not Found")
    }

 }

 async updateUser (data){
    const key = data.data.key
    const value = data.data.value
    const id = data.id

    try{
    const user =  await User.findByPk(id).then((user => {
        return user
    }))
    const updateUser= await User.update({data} , {where:{userId: id }})
    
   console.log(user)
    if (user){
        return user[1]

    }
    

} catch (err){
    return new Error(err)
}
}

}
