const {DataTypes, Model} = require('sequelize');
const Address = require('./Address');

module.exports = (sequelize, Sequelize) => {
    class AddressTypes extends Model {}

    AddressTypes.init({
                addressTypeId:{
                    type: DataTypes.INTEGER,
                    autoIncrementIdentity:true,
                    primaryKey: true
                },
                typeName:{
            type: DataTypes.ENUM({values:['customer-billing', 'customer-shipping', "vendor"]})
        }
    }, {sequelize, modelName:"AddressType"})

    return AddressTypes
}