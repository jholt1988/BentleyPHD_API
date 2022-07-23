const {DataTypes, Model} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    class Status extends Model {
        changeStatus(statusName){
         switch(statusName){
            case(1):{
                return 2
            }
            case(2):{
            return 3
         }
         case(3):{
            return 4
         }default:{
            return 1
         }
        }
    }
}

    Status.init({
       statusId:{
        type: DataTypes.INTEGER,
        primaryKey: true
       },
         statusName:{
            type: DataTypes.STRING
         }
    },
      {sequelize, modelName:"Status"})

    return Status
}
