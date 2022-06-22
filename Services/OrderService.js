const {Order, Cart} = require('../db');

module.export =  class OrderService{

    async createOrder(cartId){
        const cart = await Cart.findOne({where:{cartId: cartId}}).then((cart) =>{ 
        return cart 
        }
        )

        cart 