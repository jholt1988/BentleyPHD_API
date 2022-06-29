const express = require('express');
const OrderService = require('../Services/OrderService');
const OrderServiceInst = new OrderService();
const router = express.Router()

module.exports = (app) => {

    app.use('/orders', router);

    router.get('/orders', async (req, res, next) => {
        const userId = req.body.userId
        try {
            const userOrders = await OrderServiceInst.getAllUserOrders(userId)
            res.send(userOrders)
            next()
        } catch (err) {
            next(err)
        }
    })

    router.get('/order/:orderId', async(req, res, next) => {
        const orderId = req.params.orderId
        try{
            const userOrder = await OrderServiceInst.findOrder(orderId);
            res.send(userOrder)
            next()
        }catch(err){
            next(err)
        }
    })

}