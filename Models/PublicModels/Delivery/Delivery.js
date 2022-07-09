
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
        deliveryType:{
            type: DataTypes.JSON({type: DataTypes.JSON, values:{
                Ground_Standard:{
                    id: "GR-ST", 
                    name:"Ground-Standard", 
                    term: moment().isoWeeks(2).fromNow(), 
                    price: 12.50

                }, 
                Ground_Express:{
                    id: "GR-EX",
                    name: "Ground-Express", 
                    term: moment().days(2).fromNow(), 
                    price: 16.50
                }, 
                Air_Overnight:{
                    id:"AIR-OVRN", 
                    name: "Air-Overnight", 
                    term: moment().hours(24).fromNow(),
                    price: 25.50
                }
            }})},


        
        OrderOrderId:{
            type: DataTypes.UUID, 
            references:{
                model:"Orders",
                key:'orderId'
            }
        },
        UserAddress:{
            type:DataTypes.UUID , 
            references:{
                model:'Addresses', 
                key:"addressId"
            },
            StatusStatusId:{
                type:DataTypes.UUID,
                references:{
                    model:"Statuses", 
                    key:"statusId"
                }
            }
            
        }
        
    }, {sequelize, modelName:"Delivery"})
    
    return  Delivery
}