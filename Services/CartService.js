const {Op} = require("sequelize")
const {Cart, User, CartItem, Product} = require('../db');
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
    const userId =  data.userId
    const productName = data.productName
    const quantity  = data.quantity 
    try{    
        const cart = await  Cart.findOne({where:{UserUserId: userId}}).then((cart) =>
        {
          const cartInfo = {
            cartId: cart.cartId, 
            total: cart.total,
            addTotal: cart.increaseTotal()
            }

            return cartInfo
        }
        )
         const cartItem ={CartCartId:cart.cartId, ...cartItem}

         const product = await  Product.findOne({where: {productName: productName}}).then((product) => {
          const productInfo = {
            productId: product.productId, 
            price: product.price
          }
             return productInfo

         })    
          
         const newCartItem = {
          ...cartItem,
          quantity: quantity, 
          ProductProductId: product.productId, 
          productPrice: product.price,
          total: productPrice*quantity
         }
          
        cart.addTotal(newCartItem.total)
        const createCartItem = await CartItem.create(newCartItem).then((cartItem) => {
            if(!cartItem){
                return new Error()
            }
            return cartItem
        });
     if(createCartItem){
            return {createCartItem, cart}

             
        } else {
            return new Error('Error Adding Item to Cart');
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
  async checkout(data){}
  
  {
    const stripe = Stripe(STRIPEKEY)
    const cartId = data.cartId
    const cart = await Cart.findByPk(cartId).then((cart) => {
      return cart.total
    })

    
    const payment = // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
    const charge = await stripe.charges.create({
      amount: cart,
      currency: 'usd',
      source: 'tok_xxxx',
      description: `,
    })
}
}
