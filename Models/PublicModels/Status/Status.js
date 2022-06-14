const {DataTypes, Model} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    class Status extends Model {}

    Status.init({
        statusId:{
         type: DataTypes.INTEGER,
         primaryKey: true
        }, 
        statusName:{
            type: DataTypes.ENUM({values:['Pending', 'Approved', 'Shipped', 'Delivered' ]})
        }
    }, {sequelize, modelName:"Status"})

    return Status
}
