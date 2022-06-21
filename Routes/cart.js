const express = require("express");
const cartService = require('../Services/CartService');
const cartServInst = new cartService();
const router = express.Router();
const {CartItem, Cart} = require('../db')


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
        const cartItemDetails = req.body;
        const cartId = req.body.cartId;
        const newItem = {CartCartId:cartId, quantity: cartItemDetails.quantity, total:cartItemDetails.quantity * cartItemDetails.price, ProductProductId: cartItemDetails.ProductProductId, productPrice: cartItemDetails.price};
        const cart = await cartServInst.getCart(cartId)
        
        const newCartItem = await cartServInst.addCartItem(newItem)
        cart.increaseTotal(newCartItem.total)
        res.send({newCartItem, cart}),
     () => {
      next()
    }})

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
}