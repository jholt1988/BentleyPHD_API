const { DataTypes, Model } = require('sequelize');



module.exports =(sequelize, Sequelize)  => {
    class CartItemModel extends Model{
         totalItem() {
            const total = (this.productPrice * this.quantity)
            return total
        }

        changeStatus() {
            this.isActive = false
        }

    }
        
        CartItemModel.init({
    
        id:{
                type:DataTypes.INTEGER, 
                autoIncrement:true,
                primaryKey:true
            },
        
        quantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            
        },
        productPrice:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
    total: {
          type: DataTypes.DECIMAL

            }

        
        
  }, {sequelize, modelName: 'CartItem'})
     
    return CartItemModel
};

