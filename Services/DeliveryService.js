const {Delivery} = require('../db');


module.exports = class DeliveryService {
    async CreateDeliveryMethod (data){
        try{
  const newDeliveryMethod ={
    deliveryId:data.deliveryId,
    deliveryType: data.deliveryType,
    deliveryPrice: data.deliveryPrice,
    deliveryTerm: data.deliveryTerm


  }
const deliveryMethod = await Delivery.create(newDeliveryMethod);

return deliveryMethod

        }catch (err){
            return err
        }
    }

    async getDeliveryMethod(methodId){

    try{
      const deliveryMethod = await Delivery.findByPk({methodId})
      return deliveryMethod
    }catch(err){
      throw new Error(err)
    }
  }
}