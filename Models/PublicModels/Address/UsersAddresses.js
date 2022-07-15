
const {Model, DataTypes, } = require('sequelize');


module.exports = (sequelize, Sequelize) =>{
class UserAddressModel extends Model {}

UserAddressModel.init({
    AddressAddressId: {
        type: DataTypes.UUID,
        references:{
            model:'Addresses', 
            key: "addressId"
        }, 
    }, 
    UserUserId: {
        type:DataTypes.UUID,
        references:{
            model:'Users', 
            key:"userId"
        }, 
    },
    AddressType: {
        type: DataTypes.ENUM({
            values:["Mailing", "Billing"]
        }), 
        references:{
            model:'Addresses',
            key:'addressType'
        },
    }

}, {sequelize, modelName:'UserAddress'})

 return UserAddressModel
}