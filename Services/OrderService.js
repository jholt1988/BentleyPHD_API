const {Order, Cart} = require('../db');

module.exports =  class OrderService{

    async findOrder(orderId){
        const order = await Order.findOne({where:{orderId: orderId}}).then((cart) =>{ 
        return order
        }
        )
    }
    async getAllUserOrders(UserId){
        try{
            const OrderList = await Order.findAll({where:{UserUserId:UserId}})
            return OrderList
        }catch(err){
            return new Error(err)
        }

    
    }
}
    