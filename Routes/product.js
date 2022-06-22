const express = require('express');
const { Vendor, Product } = require('../db');
const ProductService = require('../Services/ProductService');
const router = express.Router();
const productServInsta =  new ProductService();

module.exports = (app) => {
    app.use('/store/products', router)

    router.get('/', async(req,res, next) => {
        try{
            const productList = await Product.findAll();

            res.send(productList) 
            next();
        }catch (err){
          next(err)
        }
    })

    router.get('/product', async (req, res, next) => {
        const productName = req.body.productName;

        try{
            const product = await productServInsta.getProductByProductName(productName)
            res.send(product)
            next()
        } catch(err){
           next(err)
        }
    })

    router.get('/catergory/:catergory', async(req, res, next) => {
        const catergory = req.params.catergory;

        try{
            const productsList = await productServInsta.getProductsByCatergory(catergory);
            res.send(productsList)
            next();
        } catch (err){
             next(err)
        }
    })

    router.get('/vendor/:vendor', async(req, res, next) => {
        const vendor = req.params.vendor;

        try{
            const productsList = await productServInsta.getProductsByVendor(vendor);
            res.send(productsList)
            next();
        } catch (err){
             next(err)
        }
    })

    router.post('/', async(req, res, next) => {
        const data = req.body

        try{
            const product = await productServInsta.createProduct(data)
            res.send(product)
             next()
        } catch (err){
            next(err) 
             }
    })

    router.get('/featured', async (req, res, next) => {
        try{
            const productList = await productServInsta.getAllfeaturedProducts();
            res.send(productList)
            next()

        } catch(err){
            next(err)
        }
    })

    router.put('/product/:productId', async(req, res, next) => {
        const productId = req.params.productId
        const key = req.body.key
        const value = req.body.value

        try{
            const product = await productServInsta.updateProduct({productId:productId,key:key,value: value});
            res.send(product[0])
            next()
        }catch(err){
            next(err)
        }
    })
}