const express = require('express');
const {Delivery} = require('../db/')
const deliveryService = require('../Services/DeliveryService');
const DeliveryServInsta = new deliveryService();
const router = express.Router();

module.exports = (app) =>{

app.use('/user/delivery', router)



router.get('/:userId/deliveries', async(req, res, next) => {
    const userId = req.params.userId
    try{
       const userDeliveries =  await DeliveryServInsta.getUserDeliveries(userId)
       
       res.send(userDeliveries)
  }catch (err){
    next(err)
  }
})

router.put('/:userId/delivery/:deliveryId', async (req, res, next) => {
    const deliveryId = req.params.deliveryId
    try {
        const delivery = await Delivery.findByPk(deliveryId)
        const changeDeliveryStatus = await  DeliveryServInsta.changeDeliveriesStatus(delivery.StatusStatusId, deliveryId
            ).then((status) =>{
                return status.StatusStatusId
            })
            res.send({status:changeDeliveryStatus})
        }
        
    catch (err) {
        next(err)
    }
})

}