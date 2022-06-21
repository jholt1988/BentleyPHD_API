const {Op} = require("sequelize")
const {Cart, User, CartItem} = require('../db');
const CartItems = require('../Models/Carts/CartItems');
const cart = require('../Routes/cart');




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
    try{
        const cartItem = {
            ProductProductId: data.ProductProductId, 
            quantity: data.quantity, 
            productPrice: data.productPrice, 


        };
        const newCartItem = await CartItem.create(cartItem).then((cartItem) => {
            if(!cartItem){
                return new Error()
            }
            return cartItem
        });
     if(newCartItem){
            return newCartItem
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

}
