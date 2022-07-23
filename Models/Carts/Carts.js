const { UUIDV4 } = require('sequelize')
const {  DataTypes, Model } = require('sequelize')
const CartItems = require('./CartItems')


module.exports =  (sequelize, Sequelize) => {
    class CartModel extends Model {
        
            changeStatus() {
                if (this.status === "ACTIVE") {
                     this.status = "INACTIVE"
                } else {
                     this.status = "ACTIVE"
                
            
            }
            return this.status
        }
            lowerTotal(amount){
            const newTotal = this.total -= amount;
            return newTotal;
            }
    
             increaseTotal(amount){
                console.log(this.total, amount)
               this.total = this.total += amount;
                console.log(this.total)
            }
        }  
        
    
       
       CartModel.init({
        cartId: {
            type: DataTypes.UUID, 
            defaultValue: UUIDV4,  
            allowNull: false,
           primaryKey: true,
           
        },
        status: {
            type: DataTypes.ENUM({
                values: ["ACTIVE", "INACTIVE"]
            
            }),
            defaultValue: 'ACTIVE'
            
        },
        total: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00
        }            
       }
       
        
    
       , {sequelize, modelName: 'Cart'})
    return CartModel
}

