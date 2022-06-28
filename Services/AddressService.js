const {Address} = require('../db');



module.exports = class AddressService{

   async createNewAddress(data){
   const addressType = data.addressType, 
   const address = data.address

   try{
    await Address.create({
        addrOne: address.addrOne, 
        addrTwo: address.addrTwo,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode
        add
    })
        
   }

   
    
    }


}