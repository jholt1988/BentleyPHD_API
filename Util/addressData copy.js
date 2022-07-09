const {VendorAddress} = require('../db');


const AddressData = [
    {
      "VendorVendorId": "bc3a417f-2d78-48ca-ba2c-15108ae3564b",
      "AddressAddressId": "21b7308a-df2f-4b33-87f7-416883f0ca49"
    },
    {
      "VendorVendorId": "bc3a417f-2d78-48ca-ba2c-15108ae3564b",
      "AddressAddressId": "073dbd73-0828-4a76-8e4c-5aa093865cec"
    },
    {
      "VendorVendorId": "785e13ac-f76d-47c8-b72b-0c836af98522",
      "AddressAddressId": "01c7ef30-4f0e-4b5f-922a-98747c9028c8"
    },
    {
      "VendorVendorId": "785e13ac-f76d-47c8-b72b-0c836af98522",
      "AddressAddressId": "01c7ef30-4f0e-4b5f-922a-98747c9028c8"
    },
    {
      "VendorVendorId": "be276d79-39ee-43b6-ae45-5dee9abb723b",
      "AddressAddressId": "0b74e806-b063-43bf-8b71-324af15ad983"
    }
  ]

async function addVendorAddress (){
    try{
    const bulkAddMockAddresses = await VendorAddress.bulkCreate(AddressData)
    return bulkAddMockAddresses
    }catch (err){
        throw new Error(err)
    }
}
module.exports = addVendorAddress