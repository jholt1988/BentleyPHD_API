
const {Model, DataTypes} = require('sequelize');
const moment = require('moment');
const { UUIDV4 } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    class Delivery extends Model{}

    Delivery.init({
        deliveryId:{
            type: DataTypes.UUID,
            defaultValue:UUIDV4,
            primaryKey: true
        },
        
        
        OrderOrderId:{
            type: DataTypes.UUID, 
            references:{
                model:"Orders",
                key:'orderId'
            }
        },
        DeliveryMethod:{
            type:DataTypes.INTEGER,
            references:{    
                model:'DeliveryTypes', 
                key: "DeliveryTypeId"
            }
        },
        UserAddress:{
            type:DataTypes.UUID , 
            references:{
                model:'Addresses', 
                key:"addressId"
            }
        },
            StatusStatusId:{
                type:DataTypes.INTEGER,
                references:{
                    model:"Statuses", 
                    key:"statusId"
                }
            },
             estDelivery:{
                type: DataTypes.DATE
             }
            
        }
    
        
    , {sequelize, modelName:"Delivery"})
    
    return  Delivery
}