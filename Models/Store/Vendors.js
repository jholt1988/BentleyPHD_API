const { DataTypes, Model } = require('sequelize');
const {Address} = require('../../db')

module.exports = (sequelize, Sequelize) => {
    class  VendorModel extends Model{  
         vendorExists = (vendorName) => {
         const vendor =   this.findOne({vendorName})
                if(vendor){
                    return true
                } else
                return false
            } 
        }
        
    
        VendorModel.init({
        vendorId: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true
        },
        vendorName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phonenumber:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        vendorEmail:{
            type: DataTypes.STRING,
            validate:{
                isEmail:true
            }
        }
      }, {sequelize, modelName: 'Vendor'})

    return VendorModel
}