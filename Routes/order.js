const express = require('express');
const { DeliveryType } = require('../db');
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
    }), 
    router.post('/addDelivery', async (req, res, next) => {
        const newMethodDetails = req.body 
        const newMethod = await DeliveryType.create(newMethodDetails)

        res.send(newMethod)
    })

}