const { BOOLEAN } = require('sequelize');
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Payment extends Model {}

  Payment.init({
    paymentId:{
        type: DataTypes.UUID,
        defaultType: DataTypes.UUIDV4,
        primaryKey: true 
        
    },
    method:{
        type: DataTypes.ENUM({values:['AMEX', 'VISA', 'MC', "DISC" ]}),
        allowNull: false
    },
    cardNumber:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
    CCV:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expDate:{
        type:DataTypes.DATEONLY,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL
    },
    cardZip:{
        type: DataTypes.STRING
    },
    confirmationNumber:{
        type: DataTypes.STRING
    },
    isApproved: {
        type: BOOLEAN,
        defaultValue: false
    }
  }, {sequelize, modelName:"Payment"})

  return Payment
}