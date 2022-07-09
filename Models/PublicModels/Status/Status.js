const {DataTypes, Model} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    class Status extends Model {
        changeStatus(statusName){
         switch(statusName){
            case('Pending'):{
                return 'Approved'
            }
            case('Approved'):{
            return 'Shipped'
         }
         case('Shipped'):{
            return 'Delivered'
         }default:{
            return 'Pending'
         }
        }
    }
}

    Status.init({
        statusId:{
            type:DataTypes.INTEGER,
            autoIncrementIdentity: true,
            primaryKey:true
        },
       
        statusName:{
            type: DataTypes.ENUM({values:['Pending', 'Approved', 'Shipped', 'Delivered' ]})
        }
    }, {sequelize, modelName:"Status"})

    return Status
}
