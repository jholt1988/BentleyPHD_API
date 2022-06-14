const { DataTypes, Model } = require('sequelize');



module.exports =(sequelize, Sequelize)  => {
    class CartItemModel extends Model{
         totalItem() {
            const total = (this.price * this.quantity)
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
        
            
            
          
      total: {
          type: DataTypes.DECIMAL,
          set() {   const total  = this.totalItem()
                    this.setDataValue('total',total )
        
          }

            }

        
        
  }, {sequelize, modelName: 'CartItem'})
     
    return CartItemModel
};

