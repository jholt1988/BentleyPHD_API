
const {Model, DataTypes, } = require('sequelize');


module.exports = (sequelize, Sequelize) =>{
class UserAddressModel extends Model {}

UserAddressModel.init({
    AddressAddressId: {
        type: DataTypes.UUID,
        references:{
            model:'Addresses', 
            key: "addressId"
        }
    }, 
    UserUserId: {
        type:DataTypes.UUID,
        references:{
            model:'Users', 
            key:"userId"
        }, 
        primaryKey:true
    },
    AddressType: {
        type: DataTypes.ENUM({
            values:["MAILING", "BILLING"]
        }), 
        references:{
            model:'Addresses',
            key:'AddressType'
        },
        primaryKey:true
    }

}, {sequelize, modelName:'UserAddress'})

 return UserAddressModel
}