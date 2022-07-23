
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
        type:DataTypes.UUIDV4,
        references:{
            model:'Users', 
            key:"userId"
        }, 
    },
    AddressType: {
        type: DataTypes.ENUM({
            values:["Mailing", "Billing"]
        }), 
       
    }

}, {sequelize, modelName:'UserAddress'})

 return UserAddressModel
}