const {Order, Cart} = require('../db');

module.exports =  class OrderService{
    // Finds an order by id.

    async findOrder(orderId){
        const order = await Order.findOne({where:{orderId: orderId}}).then((cart) =>{ 
        return order
        }
        )
    }
    /**
     *
     *
     * @param {String} UserId
     * @return {Array} Order[]
     */
    async getAllUserOrders(UserId){
        try{
            const OrderList = await Order.findAll({where:{UserUserId:UserId}})
            return OrderList
        }catch(err){
            return new Error(err)
        }

    
    }
}
    