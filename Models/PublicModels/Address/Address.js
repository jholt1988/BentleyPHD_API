const {  DataTypes, Model} = require('sequelize');


module.exports = (sequelize,  Sequelize) =>{

    class AddressModel extends Model {}
    
   AddressModel.init({
        addrOne: {
            type: DataTypes.STRING,
        },
        addrTwo: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zipcode: {
            type: DataTypes.STRING,
        },
    
        addressId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        AddressTypeId:{
        type:DataTypes.INTEGER,
            references:{
                model:"AddressType",
                key:"typeId"
            }
            
        }, 
        UserUserId:{
            type: DataTypes.UUID,
            references:{
                model:"User",
                key:"userId"
            }
        }
    }, {sequelize, modelName: "Address"})
    
    return AddressModel
};


    
