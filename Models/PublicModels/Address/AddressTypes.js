const {DataTypes, Model} = require('sequelize');
const Address = require('./Address');

module.exports = (sequelize, Sequelize) => {
    class AddressTypes extends Model {}

    AddressTypes.init({
        AddressAddressId:{
         type: DataTypes.UUID,
         references:{
            model:"Address",
            key: "addressId"
         }
        }, 
        typeName:{
            type: DataTypes.ENUM({values:['customer-billing', 'customer-shipping', "vendor"]})
        }
    }, {sequelize, modelName:"AddressType"})

    return AddressTypes
}