const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    class ProductModel extends Model {
        changeQuantity(order) {
            const updateQuantity = this.quantity - order;
            if (updateQuantity < 0) {
                throw new Error(`Not Enough ${this.productName} in stock. Please lower desired quantity by ${updateQuantity}`)
            } else {
                this.quantity = updateQuantity
            }
        }
        static isOutOfStock() {
            if (this.quantity <= 0) {
                return true
            } else {
                return false
            }
        }

        productOrder(orderQuantity) {
            while(this.quantity > 0)
          return  this.quantity = this.quantity - orderQuantity
        }

    }
     ProductModel.init({
        productID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
          
            },
        description: {
            type: DataTypes.TEXT('long'),

        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        inStockQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0,
           
            },
            isFeatured:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
      
        catergory: {
            type: DataTypes.ENUM({
                values: ["Laptop", "Desktop", "Gaming Console", "Tablet", "Wearables", "Cellphone"]
            })
         },
        
      
    }, {sequelize, modelName: 'Product'})
return ProductModel
}





