const {Address, UserAddress, User} = require('../db');

const userService = require('../Services/UserService');





module.exports = class AddressService{

   async createUserBilling(data){
   const address = data.address
   const userId = data.userId
   const vendorId = data.vendorId

   try{
  const newAddress = await Address.create({
        addrOne: address.addrOne, 
        addrTwo: address.addrTwo,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
        addressType: "Billing", 
    
    })
    const userAddress = await UserAddress.create({
        AddressAddressId: newAddress.addressId,
        UserUserId: userId,
        AddressType: newAddress.addressType

    }) 
    (userAddress, newAddress)
        return  {newAddress, userAddress}
   }catch(err){
    return new Error(err)
   }

}

async createUserMailing(data){
    const address = data.address
    const userId = data.userId
 
    try{
   const newAddress = await Address.create({
         addrOne: address.addrOne, 
         addrTwo: address.addrTwo,
         city: address.city,
         state: address.state,
         zipcode: address.zipcode,
         addressType: "Mailing",
     }).then((async address => {
        const userAddress = await UserAddress.create({
            AddressAddressId: address.addressId,
            UserUserId: userId,
            AddressType: address.addressType
    
        }).then((address => {
            return address
         }))
        return {address, userAddress}
     }))
   
    
        return newAddress
    }catch(err){
     return new Error(err)
    }
 
 }
 

async updateAddress(data){
    const AddressId = data.AddressId
    const field = data.field

    try{
        const Address = await Address.update({field}, {where: {AddressId:AddressId}})
        return Address
    }catch (err) {
        return new Error(err)
    }
}

async createVendor(data){
    const address = data
 
    try{
   const newAddress = await Address.create({
         addrOne: address.addrOne, 
         addrTwo: address.addrTwo,
         city: address.city,
         state: address.state,
         zipcode: address.zipcode,
         AddressType: "vendor",
         VendorVendorId:vendorId
     })
         return newAddress
    }catch(err){
     return new Error(err)
    }
 
 }
 


}