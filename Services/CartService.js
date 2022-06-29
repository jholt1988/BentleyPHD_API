const {Op} = require("sequelize")
const {Cart, User, CartItem, Product, Delivery, OrderItem, Order} = require('../db');
const CartItems = require('../Models/Carts/CartItems');
const cart = require('../Routes/cart');
const {STRIPEKEY} = require('../config')




module.exports = class cartService {
    
    async createCart(userId){
   console.log(userId)
        try{
      const newCart = await  Cart.create({UserUserId:userId}).then((cart => {
        return cart 
      }))
    
      return  newCart
    } catch (err){
        return new Error(err)
    }
}

   async addCartItem(data){
    console.log(data);

    const userId =  data.userId
    const productName = data.productName
    const quantity  = data.quantity 
    try{    
        const cart = await  Cart.findOne({where:{UserUserId:userId}})
         

         const product = await  Product.findOne({where: {productName: productName}}).then((product) => {
          const productInfo = {
            productId: product.productId, 
            price: product.price
          }
             return productInfo

         })    
          const itemTotal = Number(await product.price) *  Number(quantity)
          console.log(itemTotal)
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
    const  stripe = require('stripe')('sk_test_51KJmHTAjEYOrlpJbcRtNktEFaSBqHxaUsaAcPgjDQojexeyRbcGbKnqGwLIFhD0C7PP6EVUivLLYRdJMC216kzvI00hK4IjFwh');
    const { cartId, userId, deliveryId, paymentInfo} = data
    

    //Find User Cart
    const cart = await Cart.findByPk(cartId).then((cart) => {
      return cart
    });
  
  //Add Delivery Charges  
 const deliveryMethod = await Delivery.findByPk(deliveryId).then((dm) => {
  return dm
 });


 const cartItems= await CartItem.findAll({CartCartId: cart.cartId})

 const total =await cartItems.reduce((total, item) => {
return total += Number(item.total)
 }, 0)

 //Get Total Including Delivery Charges 
const grandTotal  = await total + Number(deliveryMethod.deliveryPrice);

console.log(cartItems[0], cartItems[1])
console.log(grandTotal, total,  cartId)
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
    
    const NewOrder = async () => { return  Order.create({UserUserId:userId, total:total })}
    const NewOrderInstantance = await  NewOrder({StatusStatusId:"0", DeliveryDeliveryId:deliveryId, ...this})
       
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
      
    //  NewOrderInstantance.items = await  Promise.all(promises)
     console.log(cartItems)
    console.log(NewOrderInstantance.items)
    
  return NewOrderInstantance
}}


// .then(async (Item) =>{ Item= {
//   id: item.id, 
//   quantity: item.quantity, 
//   total: item.total, 
//   ProductProductId: item.ProductProductId, 
//   CartCartId: item.CartCartId,
//   productPrice: item.productPrice
