
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
    const user = await User.findByPk(userId,{
      include:'UserAddressess'
    }).then(( user) => {
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

 async updateUser (data){
    const key = data.data.key
    const value = data.data.value
    const id = data.id
  console.log(key, value)
   try{
    
    const user = await User.update({
      [key]:[value]
    }, {where:{userId:id}})   


        return user
   } catch(err){
    throw new Error(err)
   }

    
 }

async addUserAddress(data){
    const address = data.address
    const addressType = data.addressType
    const userId = data.userId
    let newAddress 
    try{
    if (addressType === 'Billing'){
        newAddress = await AddressServiceInsta.createUserBilling({address,userId})
    } else if(addressType === 'Mailing'){
        newAddress= await AddressServiceInsta.createUserMailing({address, userId})
    }
  return newAddress
} catch (err){
    return new Error(err)
}

}


}
