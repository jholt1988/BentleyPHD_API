const {  DataTypes, Model } = require('sequelize');
const { OrderItem } = require('../../db');




module.exports = (sequelize, Sequelize) => {
    class OrderItemsModel extends Model {
        async createItem(item){
           const newItem = await OrderItem.create(item)
           return newItem 
        }
     }
    
    OrderItemsModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrementIdentity: true,
            primaryKey: true,
            autoIncrement: true,
            
            
            
        },
        quantity: {
            type: DataTypes.INTEGER,
            
        },
        ProductProductId: {
            type: DataTypes.UUID,
           
        },
        total:   { 
            type: DataTypes.DECIMAL, 

        },
        productPrice:{
            type: DataTypes.DECIMAL,

        },
        CartCartId:{
            type: DataTypes.UUID,
    
        }
        
    }, {sequelize, modelName: "OrderItem"})
    return OrderItemsModel
}


