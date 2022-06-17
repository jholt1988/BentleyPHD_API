const { Sequelize } = require('sequelize');
const UserModel = require('../Models/Users/User');
const AddressModel = require('../Models/PublicModels/Address/Address');
const DeliveryModel = require('../Models/PublicModels/Delivery/Delivery');
const PaymentModel = require('../Models/PublicModels/Payment/Payment');
const AddressTypeModel = require('../Models/PublicModels/Address/AddressTypes')
const ProductModel = require('../Models/Store/Product');
const VendorModel = require('../Models/Store/Vendors');
const CartModel = require('../Models/Carts/Carts');
const CartItemModel = require('../Models/Carts/CartItems');
const OrderModel = require('../Models/Orders/Orders');
const OrderItemsModel = require('../Models/Orders/OrderItems');
const StatusModel = require('../Models/PublicModels/Status/Status')
const { DB } = require('../config');
const sequelize = new Sequelize(DB.DB, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: 'postgres',
    port: DB.DBPORT,
    pool: {
    max: 5,
    min: 0,
    idle: 1000
     }
})

 async function dbTest() {
    try {
        sequelize.authenticate();
        console.log('Database Connection Successful Established')
    } catch (error) {
        console.log(' Error Connecting To Database')
    }
}

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

const User = UserModel(sequelize, Sequelize);
const Address = AddressModel(sequelize, Sequelize);
const Vendor = VendorModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Cart = CartModel(sequelize, Sequelize);
const CartItem = CartItemModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);
const OrderItem = OrderItemsModel(sequelize, Sequelize);
const AddressTypes = AddressTypeModel(sequelize, Sequelize);
const Delivery = DeliveryModel(sequelize, Sequelize);
const Payment = PaymentModel(sequelize, Sequelize);
const Status = StatusModel(sequelize, Sequelize);

User.belongsToMany(Address, {through:'UserAddress' })
Address.belongsToMany(User,{through:'UserAddress' });
Vendor.hasOne(Address);
Address.belongsTo(Vendor);
Vendor.hasMany(Product);
Product.belongsTo(Vendor);
Product.hasOne(CartItem);
CartItem.belongsTo(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);
User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Payment);
Payment.belongsTo(User);
Order.hasMany(OrderItem)
Order.hasOne(Payment);
Payment.belongsTo(Order);
Delivery.hasOne(Order);
Order.belongsTo(Delivery);
Delivery.hasOne(Address);
Address.belongsTo(Delivery);
Status.hasMany(Delivery);
Delivery.belongsTo(Status);
Status.hasMany(Order);
Order.belongsTo(Status);



module.exports = {
    db,
    Address,
    AddressTypes,
    User,  
    Product, 
    Vendor, 
    Cart, 
    CartItem, 
    Order,
    OrderItem,
    dbTest,
    Delivery,
    Payment,
    Status
}