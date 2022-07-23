const {Op} = require("sequelize")
const {Cart, User, CartItem, Product, Delivery, OrderItem, Order, DeliveryType} = require('../db');
const CartItems = require('../Models/Carts/CartItems');
const cart = require('../Routes/cart');
const {STRIPEKEY} = require('../config');
const deliveryService = require('../Services/DeliveryService');
const DeliveryServInsta = new deliveryService()




module.exports = class cartService {
    
    async createCart(userId){
   (userId)
        try{
      const newCart = await  Cart.create({UserUserId:userId}).then((cart => {
        return cart
      }))
      const otherCarts = await Cart.findAll({where:{
        [Op.not]:[{cartId: newCart.cartId}],
        UserUserId:userId

      }}).then((otherCarts => {
        otherCarts.forEach(function(cart,index, otherCarts){
          Cart.update({status:cart.changeStatus()},{where:{status:"ACTIVE"}});
          return cart
          
        })
        return otherCarts
      }))
      (otherCarts)
      return {newCart, otherCarts}
    } catch (err){
        return new Error(err)
    }
}

   async addCartItem(data){
    (data);

    const userId =  data.userId
    const productName = data.productName
    const quantity  = data.quantity 
    const cartId = data.cartId
    try{    
        const cart = await  Cart.findOne({where:{cartId:cartId}})
         (`CART:${cart}`, Cart)

         const product = await  Product.findOne({where: {productName: productName}}).then((product) => {
          const productInfo = {
            productId: product.productId, 
            price: product.price
          }
             return productInfo

         })    
          const itemTotal = Number(await product.price) *  Number(quantity)
          (itemTotal)
         const newCartItem = {
          CartCartId: await cart.cartId,
          quantity: quantity, 
          ProductProductId: await  product.productId, 
          productPrice: await  product.price,
          total: itemTotal
         }
          
        await cart.increaseTotal(newCartItem.total)
        
        const createCartItem = await CartItem.create(newCartItem).then((cartItem) => {
            if(!cartItem){
                return new Error()
            }
            return cartItem
        });
     if(!createCartItem){
      return new Error('Error Adding Item to Cart');

             
        } else {
              
              return createCartItem
        }
    }catch (err){
        throw new Error(err)
    }
   }
   async deleteCartItem(cartItemId, cartId){

     try{
      const results =  await CartItem.destroy({where:{[Op.and]: [{id:cartItemId},{CartCartId:cartId}]}}).then(results => {
            return results
        })
          return results
     }
   catch (err){
   throw new Error(err)
   }

    }

    async getCartItem(cartId, cartItemId){
      try{
        const Item = await CartItem.findOne({where:{[Op.and]:[{CartCartId:cartId}, {id:cartItemId}]}})
        return Item 
      }catch (err){
        throw new Error(err)
      }
    }

    async getCart(cartId){
        try{
            const cart = await Cart.findByPk(cartId)
            return cart
        } catch (err){
            throw new Error(err)
        }
    }

    async updateCartItem(cartId, cartItemId, quantity){
        try{
            const updateItem = await CartItem.update({[quantity]: quantity}, {where:{[Op.and]:[{CartCartId:cartId}, {id:cartItemId}]}});

            return updateItem
        }catch(err){
            return new Error(err)
        }
    }
  async checkout(data){
    const  stripe = require('stripe')(STRIPEKEY);
    const { cartId, userId, deliveryId, paymentInfo} = data
    

    //Find User Cart
    const cart = await Cart.findByPk(cartId).then((cart) => {
      return cart
    });
  (cart)
  //Add Delivery Charges  
 const deliveryMethod = await DeliveryType.findByPk(deliveryId).then((dm) => {
  return dm
 });


 const cartItems= await CartItem.findAll({where:{CartCartId: cart.cartId}})

 const total =await cartItems.reduce((total, item) => {
return total += Number(item.total)
 }, 0)

 //Get Total Including Delivery Charges 
const grandTotal  =  total + Number(deliveryMethod.price);

(cartItems[0], cartItems[1])
(grandTotal, total,  cartId)
const customer = await stripe.customers.create({
  description: 'test',
  source : "tok_visa"
  
})

    // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
    const charge = await stripe.charges.create({
      amount: (grandTotal).toFixed(2)*100,
      currency: 'usd',
      customer: customer.id,
      description: `testCharge`,
    
    })

    //Create A New Order
    
    const NewOrder = async () => { return  Order.create({UserUserId:userId, total:total, StatusStatusId:1, status:1 })}
    const NewOrderInstantance = await  NewOrder({ ...this })
       
    //  NewOrderInstantance.items =  await Order.addItems(cartItems)
      NewOrderInstantance.items =await Promise.all(cartItems.map(async item => {
     return   await OrderItem.create({
          quantity: item.quantity,
          ProductProductId: item.ProductProductId,
          total: item.total, 
          productPrice: item.productPrice, 
          CartCartId: item.CartCartId,
          OrderOrderId: NewOrderInstantance.orderId,
          ...this
         })
  
     }))
     const delivery = await DeliveryServInsta.newOrderDelivery(NewOrderInstantance.orderId, deliveryId,1, deliveryMethod.estimateDelivery, userId,1).then(delivery => {
      return delivery.deliveryId
     })
      
     NewOrderInstantance.set('DeliveryDeliveryId', delivery)
     NewOrderInstantance.save()
  
    //  NewOrderInstantance.items = await  Promise.all(promises)
     (delivery)
    (NewOrderInstantance.items)
    
  return {NewOrderInstantance, charge, customer
}}
}

// .then(async (Item) =>{ Item= {
//   id: item.id, 
//   quantity: item.quantity, 
//   total: item.total, 
//   ProductProductId: item.ProductProductId, 
//   CartCartId: item.CartCartId,
//   productPrice: item.productPrice
