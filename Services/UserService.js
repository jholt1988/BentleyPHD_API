
const {User, UserAddress} = require('../db')
const AddressService = require('../Services/AddressService');
const AddressServiceInsta = new AddressService()

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
    const user = await User.findByPk(userId).then((user) => {
        if(user){
            return user
          }
        else{
            return new Error('User Not Found ')
        }
    
    
    })
    
console.log(user)
    return user
}


   catch(err){
         return new Error("User Not Found")
    }

 }

 async updateUser (id, key, value){
   
  console.log(key, value)
   try{
    
    const user = await User.update({
      key:value
    }, {where:{userId:id}})   


        return user
   } catch(err){
    throw new Error(err)
   }

    
 }

async addUserAddress(addressId, userId){
    try{
      console.log(userId)
      const user = await User.findByPk(userId)
        
    console.log(user)
      const addAddr = await user.setAddress(addressId)
    console.log(user.addresses)
      User.upsert({
        userId:user.userId,
        addresses:addAddr,
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
    }catch (err){
      return new Error(err)
    }

}


}
