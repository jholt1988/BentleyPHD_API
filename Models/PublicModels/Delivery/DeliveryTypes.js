const {Model, DataTypes} =require('sequelize');


module.exports = (sequelize, Sequelize) => {
    class DeliveryTypes extends Model{
        

        selectDeliveryMethod(method){
            if(method === this.deliveryType.Ground_Standard){
                return this.deliveryType.Ground_Standard
            }
            if(method === this.deliveryType.Air_Overnight){
                return this.deliveryType.Air_Overnight
            }
            if(method === this.deliveryType.Ground_Express){
                return this.deliveryType.Ground_Express
            }
        }
    
    }


    DeliveryTypes.init({

        DeliveryTypeId:{
            type: DataTypes.STRING, 
            primaryKey: true
        },
        deliveryTypeName:{
            type: DataTypes.STRING
        },
        estimateDelivery:{
            type: DataTypes.STRING
        }, 
        price:{
            type: DataTypes.FLOAT
        }, 
        VendorVendorId:{
            type: DataTypes.UUID, 
            references:{
                model:"Vendors",
                key:'vendorId'
            }
        }

            

        
        
    }, {sequelize, modelName:'DeliveryType'})
 return DeliveryTypes
}