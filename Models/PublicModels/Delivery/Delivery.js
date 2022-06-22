
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    class Delivery extends Model{}

    Delivery.init({
        deliveryId:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        deliveryType:{
            type: DataTypes.STRING
        },
        deliveryPrice:{
            type: DataTypes.DECIMAL
        },
        deliveryTerm:{
            type: DataTypes.DATE
            
        }
        
    }, {sequelize, modelName:"Delivery"})
    
    return  Delivery
}