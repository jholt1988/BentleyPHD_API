
const {  DataTypes, Model } = require('sequelize');
const {Order, OrderItem} = require('../../db');
const OrderItems = require('./OrderItems');

module.exports =(sequelize) => {
    class OrderModel extends Model {
       static changeStatus() {
            if (this.status === "PLACED") {
                return this.status = "APPROVED"
            } else if (this.status === "APPROVED") {
                return this.status = "SHIPPED"
            } else if(this.status === "SHIPPED") {
                return this.status = "DELIVERED"
            }
        }

    
        
    // static async  addItems(items){
    //         console.log(items)
    //       const promises =  items.map(async item => {
    //         const newItem =await  OrderItem.createItem(item)
    //             return newItem
    //        }
    //                )
              
             
            
        //     const newItems  =await Promise.all(promises)
        //     console.log(this.items)
        //     return newItems
             
        //     }  
        // }
        
    }
    OrderModel.init({
        orderId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            
        },
        items: {
            type: DataTypes.ARRAY({type: DataTypes.JSON,
                values: {

                    references: {
                        model: 'OrderItem',
                        key: 'id'
                }}
            })
           
        },
        status: {
            type: DataTypes.INTEGER,
            references:{model:'Statuses', key:'statusId'}
       
    
    }}, {sequelize, modelName:'Order'})
   return OrderModel
}

