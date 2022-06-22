const express = require('express');
const { Vendor } = require('../db');
const VendorService = require('../Services/VendorService');
const router = express.Router();
const VendorServInst = new VendorService();


module.exports = (app) =>{

    app.use('/store/vendors', router)

    router.get('/', async(req, res, next) => {
        try{
            const results = await VendorServInst.getAllVendors()

            if(!results){
                return new Error();
            }

            res.send(results)

            next();
        } catch (err){
            res.send(new Error(err))
        }
    })

router.get('/vendor', async (req, res, next) => {
  const vendorName = req.body.vendorName
    try{
    const vendor = await VendorServInst.getVendor(vendorName);
    res.send(vendor) 
    next()
  }catch (err){
    throw new Error(err)
  }
})

router.post('/', async(req, res, next) => {
    const vendorName = req.body.vendorName;
    const phonenumber = req.body.phonenumber;
    const vendorEmail = req.body.vendorEmail;

    try{
        const vendor = await Vendor.create({vendorName, phonenumber, vendorEmail});
        res.send(vendor)
        next(err)
    } catch(err){
      next(err)
    }
})

router.put("/:vendorId", async (req,res, next) => {
   const vendorId = req.params.vendorId;
   const key = req.body.key;
   const value = req.body.value;
   
   try{
      const vendor = VendorServInst.updateVendor({vendorId, key, value});
    res.send(vendor);
      next();
   }catch(err){
   next(err)
   }
})


}