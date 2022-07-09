const express = require("express");
const cartService = require('../Services/CartService');
const cartServInst = new cartService();
const router = express.Router();
const {CartItem, Cart, Product, Delivery} = require('../db');
const User = require("../Models/Users/User");
const DeliveryService = require('../Services/DeliveryService');
const moment = require("moment");
const DeliveryServInsta = new DeliveryService


module.exports = (app) => {

    app.use("/user/:userId/cart", router)


    router.post('/', async (req, res, next) => {
        const userId = req.body.userId
        const newCart = await cartServInst.createCart(userId).then((cart) => {
            if(!cart){
                return new Error()
            }

            if(cart){
                return (cart)
            }
        })
        console.log(newCart)
        res.redirect(`/user/:${userId}/cart/${newCart.cartId}`)
    })

    router.post('/:cartId', async(req, res, next) => {
        const {productName, quantity, userId} = req.body;
        const cartId = req.params.cartId;
    
       console.log(userId)
       const newCartItem = await cartServInst.addCartItem({productName:productName, quantity:quantity, cartId:cartId, userId:userId})
    
        res.send(newCartItem)

        next()
    })

    router.put('/:cartId', async(req, res, next) => {
        const cartId = req.params.cartId
        try{
            const cartItems = await CartItem.findAll({where:{CartCartId: cartId}}).then((cartItems) =>{
                return cartItems
             })
          const cartTotal =   cartItems.forEach(Item => {
                const total = Item.total += Item.total
                return total 
             });

            if(cartItems){
                res.send(cartItems)
            }
           next()
            
        } catch(err){
            return new Error(err);
        }
    })

    router.delete('/:cartId/:id', async(req, res, next) => {
        const cartItemId = req.body.id ;
        const cartId = req.params.cartId;

        try{
           const itemRemoved = await cartServInst.getCartItem(cartId, cartItemId)
           const deleteItem = await cartServInst.deleteCartItem(cartItemId, cartId);
           const itemTotal = await itemRemoved.total;
           const cart = await cartServInst.getCart(cartId);
            cart.lowerTotal(itemTotal);
           res.send({deleteItem, cart})
           next();
        }catch (err){
            res.send(new Error(err));
        }

    })

    router.post('/checkout/:cartId', async (req, res, next) => {
       const cartId = req.params.cartId;
       const deliveryId = req.body.deliveryId;
       const userId = req.body.userId                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

       
    try{
    //     const deliveryMethod = await Delivery.create({
    //         deliveryId:deliveryId,
    //         deliveryType:"Standard-Ground",
    //         deliveryPrice: 22, 
    //         deliveryTerm: moment.max(moment().add("00:00:00:114"))
            
        
    //     })
       const checkout = await cartServInst.checkout({cartId:cartId, deliveryId: deliveryId,userId: userId})

       res.send(checkout)
       next()
    }catch(err){
        next(err);
    }
})
}