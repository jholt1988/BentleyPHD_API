const {Address} = require('../db');
const Address = require('../Models/PublicModels/Address/Address');



module.exports = class AddressService{

   async createNewAddress(data){
   const addressType = data.addressType
   const address = data.address

   try{
  const newAddress = await Address.create({
        addrOne: address.addrOne, 
        addrTwo: address.addrTwo,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
        AddressTypeId: addressType
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



}