const { Delivery, DeliveryType, Status, Order } = require('../db');
const moment = require('moment')


module.exports = class DeliveryService {
  // Creates a delivery method for a user.
  async CreateDeliveryMethod(data) {
    try {
      const newDeliveryMethod = {
        DeliveryTypeId: data.deliveryId,
        deliveryTypeName: data.deliveryTypeName,
        price: data.price,
        estimateDelivery: data.estimateDelivery,
        VendorVendorId: data.VendorVendorId


      }
      const deliveryMethod = await DeliveryType.create(newDeliveryMethod);

      return deliveryMethod

    } catch (err) {
      return err
    }
  }

  // Get a delivery method by id.
  async getDeliveryMethod(methodId) {

    try {
      const deliveryMethod = await DeliveryType.findByPk({ methodId })
      return deliveryMethod
    } catch (err) {
      throw new Error(err)
    }
  }

  // Creates a new delivery.
  async newOrderDelivery(orderId, deliveryType, statusId, deliveryDays, userId,) {
    const deliveryHours = deliveryDays * 24

    const estimateDelivery = moment().utc().add(deliveryHours, "h")
    const delivery = {
      OrderOrderId: orderId,
      deliveryMethod: deliveryType,
      statusId: statusId,
      estDelivery: estimateDelivery,
      UserUserId: userId,
      StatusStatusId: statusId
    }
    try {

      const newOrder = await Delivery.create(delivery).then(delivery => {
        return delivery
      })
        (newOrder)
      return newOrder
    } catch (err) {
      return new Error(err)
    }
  }

  // Get all deliveries for a given user.
  async getUserDeliveries(userId) {
    let userDeliveryList = []
    try {
      const userOrderList = await Order.findAll({ where: { UserUserId: userId } }).then((list) => {
        return list
      })
      const userDeliveries = userOrderList.map((order) => {
        const delivery = order.DeliveryDeliveryId
          (delivery, order)
        return delivery
      })
        (userDeliveries, userOrderList)
      userDeliveries.forEach(async (delivery) => {
        const userDelivery = await Delivery.findByPk(delivery)
        return userDeliveryList.push(userDelivery)

      })
      return userDeliveryList
    } catch (err) {
      return new Error(err)

    }
  }

  // Updates the status of a delivery
  async changeDeliveriesStatus(status, deliveryId) {
    try {
      const delivery = await Delivery.findByPk(deliveryId);
      const changeDeliveryStatus = Status.changeStatus(status);

      const updateStatus = await Delivery.upsert({
        deliveryId: delivery.deliveryId,
        OrderOrderId: delivery.OrderOrderId,
        DeliveryMethod: delivery.deliveryMethod,
        UserAddress: delivery.UserAddress,
        StatusStatusId: changeDeliveryStatus,
        estDelivery: delivery.estDelivery

      }).then(([delivery, created]) => {
        return delivery
      })
      return updateStatus
    } catch (err) {
      return new Error(err)
    }
  }
}
