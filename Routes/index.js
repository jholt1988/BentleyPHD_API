const authRoute = require('./auth');
const userRoute = require('./user');
const cartRoute = require('./cart');
const vendorRoute = require('./vendor');
const productRoute = require('./product')

module.exports = (app, passport) => {
     authRoute(app, passport);
     userRoute(app);
     cartRoute(app);
     vendorRoute(app);
     productRoute(app);

    return app
}