const {Address} = require('../db');




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
        AddressType: "customer-billing", 
        UserUserId: userId
    })
        return newAddress
   }catch(err){
    return new Error(err)
   }

}

async createUserShipping(data){
    const address = data.address
 
    try{
   const newAddress = await Address.create({
         addrOne: address.addrOne, 
         addrTwo: address.addrTwo,
         city: address.city,
         state: address.state,
         zipcode: address.zipcode,
         AddressType: "customer-shipping",
         UserUserId: userId
     })
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
    const address = data.address
 
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