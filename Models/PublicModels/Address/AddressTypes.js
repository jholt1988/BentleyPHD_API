const {DataTypes, Model} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    class AddressTypes extends Model {}

    AddressTypes.init({
        typeId:{
         type: DataTypes.INTEGER,
         primaryKey: true
        }, 
        typeName:{
            type: DataTypes.ENUM({values:['customer-billing', 'customer-shipping', "vendor"]})
        }
    }, {sequelize, modelName:"AddressType"})

    return AddressTypes
}