const express = require ('express');
const DeliveryService = require('../Services/DeliveryService');
const DeliveryServInsta = new DeliveryService();
const router = express.Router();


module.exports = (app) => {

    app.use('/admin', router)

    router.post('/delivery', async (req, res, next) => {
        const newMethod = {
            deliveryId: req.body.deliveryId, 
            deliveryTypeName: req.body.deliveryTypeName, 
            price: req.body.price,
            estimateDelivery: req.body.estimateDelivery,
            VendorVendorId: req.body.VendorVendorId
        }

        try{
            const newDeliveryMethod = await DeliveryServInsta.CreateDeliveryMethod(newMethod)

            res.send(newDeliveryMethod)
        } catch(err){
            next(err)
        }
    } )


}