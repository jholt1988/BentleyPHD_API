const authRoute = require('./auth');
const userRoute = require('./user');
const cartRoute = require('./cart');
const vendorRoute = require('./vendor');
const productRoute = require('./product')
const orderRoute = require('./order');
const adminRoute = require('./admin');
const deliveryRoute = require('./delivery')
module.exports = (app, passport) => {
     authRoute(app, passport);
     userRoute(app);
     cartRoute(app);
     vendorRoute(app);
     productRoute(app);
     orderRoute(app);
     adminRoute(app);
     deliveryRoute(app);

    return app
}