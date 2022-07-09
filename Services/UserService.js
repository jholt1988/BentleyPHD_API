const {User} = require('../db')
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
    return updateUser

} catch (err){
    return new Error(err)
}
}

async addUserAddress(data){
    const address = data.address
    const addressType = data.addressType
    const userId = data.userId
    let newAddress 
    try{
    if (addressType === 'customer-billing'){
        newAddress = await AddressServiceInsta.createUserBilling({address,userId})
    } else if(addressType === 'customer-shipping'){
        newAddress= await AddressServiceInsta.createUserShipping({address, userId})
    }
  return newAddress
} catch (err){
    return new Error(err)
}

}


}
