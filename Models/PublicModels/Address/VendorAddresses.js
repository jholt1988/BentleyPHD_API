
const {Model, DataTypes, } = require('sequelize');


module.exports = (sequelize, Sequelize) =>{
class VendorAddressModel extends Model {}

VendorAddressModel.init({
    AddressAddressId: {
        type: DataTypes.UUID,
        references:{
            model:'Addresses', 
            key: "addressId"
        }
    }, 
    VendorVendorId: {
        type:DataTypes.UUID,
        references:{
            model:'Vendors', 
            key:"vendorId"
        }
    },
   

}, {sequelize, modelName:'VendorAddress'})

 return VendorAddressModel
}