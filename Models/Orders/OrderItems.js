const {  DataTypes, Model } = require('sequelize');
const { OrderItem } = require('../../db');




module.exports = (sequelize, Sequelize) => {
    class OrderItemsModel extends Model {
        
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
        ProductId: {
            type: DataTypes.UUID,
           
        },
        total:   { 
            type: DataTypes.VIRTUAL, 
        
            set(){
                total = this.quantity * this.price
                return this.setDataValue('total') 
            }
        }
        
    }, {sequelize, modelName: "OrderItem"})
    return OrderItemsModel
}


