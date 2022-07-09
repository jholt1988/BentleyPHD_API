const Express = require('express');

const {PORT} = require('./config');
const { dbTest, db, Cart, CartItem, Delivery, OrderItem, Status, User, Product, Vendor } = require('./db');
const app = Express();
const status = require('./Models/PublicModels/Status/Status')
const DeliveryService = require('./Services/DeliveryService');
const DeliveryServInsta = new DeliveryService()
const loaders = require('./Loaders');
const moment = require('moment');
const {up, down} = require('./Util/enum_util');
const {QueryInterface,Sequelize} = require('sequelize');
const addUserData = require('./Util/UserData');
const addVendorData = require('./Util/VendorData');
const addProductData = require('./Util//ProductData')
const user = require('./Routes/user');
const userService = require('./Services/UserService');
const ProductService = require('./Services/ProductService');
const addAddressData = require('./Util/addressData');
const addUserAddress = require('./Util/userAddress');
const addVendorAddress = require('./Util/addressData copy');
async function  startServer(){

    loaders(app)
    dbTest()
  
    await db.sequelize.sync({force: false}).then(() => {
        console.log('Drop And Re-Sync DB')
    })


    // await addProductData()
    // await addAddressData()
    //  await addVendorData()
    //  await addUserData()
    app.get('/', function (){
       
        console.log("Test")
    })
app.listen(PORT, async () => {
        console.log(`Server is listening on Port:${PORT}`)
    })
}

startServer();